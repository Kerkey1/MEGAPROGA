//Стили проекта
import './App.css';
import './index.css'

//Импорты библиотек
import 'antd/dist/antd.css';
import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {Col, Form, Input, Layout, Menu, Row} from "antd";
import {
    CaretRightOutlined,
    ClearOutlined,
    DownloadOutlined,
    MinusSquareFilled, PauseOutlined, PlusOutlined, StepBackwardOutlined, StepForwardOutlined,
    UploadOutlined
} from "@ant-design/icons";

//Компоненты
import RegistersView from "./components/RegistersView";
import InitialRegistersView from "./components/InitialRegistersView";
import TableComponent from "./components/TableComponent";
import RowSettings from "./components/RowSettings";

//Функции
import Registers from "./Logic/Reg";
import Command from "./Logic/Command";
import {Exec} from "./Funcrions/FunctionsForBack";
import ContextMenu from "./components/ContextMenu";

const {Content} = Layout;

//Рабочие переменные вне ререндера
let mainRom = []
let start_regs = []
let temp_regs = []
let checkCommands = []
let regs
mainRom[0] = new Command()
let initialValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const App = observer(() => {

    const [form] = Form.useForm()
    const [z, setZ] = useState(0)
    const [rowSettingsVisible, setRowSettingsVisible] = useState(false)
    const [rowContextVisible, setRowContextVisible] = useState(false)
    const [curRow, setCurRow] = useState(0)
    const [redact, setRedact] = useState(true)
    let [dataSource, setDataSource] = useState([])
    const [tact, setTact] = useState(0)
    const [rowIndex, setRowIndex] = useState()

    useEffect(() => {
        document.getElementById('file').addEventListener('change', onChange);
    }, [])

    useEffect(() => {
        console.log(dataSource)
        console.log(mainRom)
        console.log(checkCommands)
    }, [dataSource])
    //Вспомогательные функции
    const saveJsonObjToFile = (obj) => {
        const text = JSON.stringify(obj);
        const name = "sample.json";
        const type = "text/plain";
        const a = document.createElement("a")
        const file = new Blob([text], {type: type})
        a.href = URL.createObjectURL(file)
        a.download = name
        document.body.appendChild(a)
        a.click()
        a.remove()
    }

    const setRegister = (v) => {
        let i = z
        let temp
        if (z === 0) {
            for (i; i < v.result.length; i++) {
                temp = v.result[i]
                temp_regs[i] = new Registers(temp)
            }
            regs = temp_regs
        } else {
            for (i + 1; i < v.result.length; i++) {
                temp = v.result[i - z - 1]
                temp_regs[i] = new Registers(temp)
            }
            regs = temp_regs
        }
    }

    const onChange = (event) => {
        let reader = new FileReader()
        reader.onload = onReaderLoad
        reader.readAsText(event.target.files[0])
    }

    const onReaderLoad = (event) => {
        let obj = JSON.parse(event.target.result)
        setDataSource([])
        mainRom = []
        checkCommands = []
        setZ(0)
        alert_data(obj.commands, obj.commands.length)
    }

    const alert_data = (name, length) => {
        for (let i = 0; i < length; i++) {
            checkCommands[i] = true
            mainRom[i] = new Command(name[i])
        }
        for (let i = 0; i < length; i++) {
            let newRow = {
                key: i,
                address: i,
                command: i,
            }
            setDataSource(pre => {
                return [...pre, newRow]
            })
        }
        console.log(mainRom)
    }

    //Функции кнопок
    const nextStep = () => {
        let j = z
        j = j + 1
        setZ(j)
    }

    const prevStep = () => {
        if (z > 0) {
            let j = z;
            j = j - 1;
            setZ(j)
        }
    }

    const pause = () => {
        let temp = (regs[z].ToString()).split(',')
        initialValues = temp.map(string => parseInt(string))
        setRedact(true)
    }

    const stop = () => {
        setZ(0)
        setRedact(true)
        regs = undefined
        temp_regs = []
        initialValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    const addRow = () => {
        const aLength = dataSource.length;
        mainRom[aLength] = new Command();
        const newRow = {
            key: aLength,
            address: aLength,
            command: aLength,
        }
        setDataSource(pre => {
            return [...pre, newRow];
        })
    }

    const startTesting = () => {
        start_regs = new Registers(initialValues)
        if (z === 0) {
            Exec(start_regs, mainRom, z, tact)
                .then((v) => setRegister(v))
                .then(() => setRedact(false))
        } else {
            Exec(start_regs, mainRom, z, tact).then((v) => setRegister(v))
                .then(() => regs[z] = new Registers(initialValues)).then(() => setRedact(false))

        }
    }

    const loadCommands = () => {
        let temp = document.getElementById('file')
        temp.click()
    }

    const saveCommands = () => {
        let temp = []
        for (let i = 0; i < mainRom.length; i++) {
            if (i === 0)
                temp += mainRom[i].Raw()
            else
                temp += "," + mainRom[i].Raw()
        }
        let result = {
            commands: [temp]
        }
        saveJsonObjToFile(result)
    }

    const clearCommands = () => {
        setDataSource([])
        checkCommands = []
        mainRom = []
        regs = undefined
        temp_regs = []
        setZ(0)
        mainRom[0] = new Command()
        setRedact(true)
        initialValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    const setTactCount = (event) => {
        setTact(event.target.value)
    }

    return <>

        <Layout>
            <Content>
                <Row>
                    <Col span={2}>
                        <Input onChange={e => setTactCount(e)} placeholder="количество тактов"/>
                        <Menu
                            mode="inline"
                            theme="dark"
                            style={{height: "100vh", width: "auto"}}
                            inlineCollapsed={true}
                            selectable={false}
                        >
                            <Menu.Item key="0" icon={<StepForwardOutlined/>} onClick={nextStep}>
                                Далее
                            </Menu.Item>
                            <Menu.Item key="1" icon={<StepBackwardOutlined/>} onClick={prevStep}>
                                Назад
                            </Menu.Item>
                            <Menu.Item key="2" icon={<PauseOutlined/>} onClick={pause}>
                                Пауза
                            </Menu.Item>
                            <Menu.Item key="3" icon={<CaretRightOutlined/>} onClick={startTesting}>
                                Начать отладку
                            </Menu.Item>
                            <Menu.Item key="4" icon={<MinusSquareFilled/>} onClick={stop}>
                                Стоп
                            </Menu.Item>
                            <Menu.Item key="5" icon={<PlusOutlined/>} onClick={addRow}>
                                Добавить команду
                            </Menu.Item>
                            <Menu.Item key="6" icon={<DownloadOutlined/>} onClick={loadCommands}>
                                Загрузить команды
                            </Menu.Item>
                            <Menu.Item key="7" icon={<UploadOutlined/>} onClick={saveCommands}>
                                Сохранить команды
                            </Menu.Item>
                            <Menu.Item key="8" icon={<ClearOutlined/>} onClick={clearCommands}>
                                Очистить команды
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={7}>
                        <TableComponent
                            setRowSettingsVisible={setRowSettingsVisible}
                            setRowContextVisible={setRowContextVisible}
                            setCurRow={setCurRow}
                            dataSource={dataSource}
                            addRow={addRow}
                            form={form}
                            data={regs}
                            Rom={mainRom}
                            z={z}
                            checkCommands={checkCommands}
                            setRowIndex={setRowIndex}
                        />
                    </Col>
                    <Col span={15}>{redact ? <InitialRegistersView initialValues={initialValues}/> :
                        regs && <RegistersView reg={regs} index={z} redact={redact} initialValues={initialValues}/>}
                    </Col>
                </Row>
                <RowSettings
                    rowSettingsVisible={rowSettingsVisible}
                    setRowSettingsVisible={setRowSettingsVisible}
                    curRow={curRow}
                    Rom={mainRom}
                    dataSource={dataSource}
                    checkCommands={checkCommands}
                    form={form}
                />
                <input id="file" type="file"/>
                <ContextMenu visible={rowContextVisible} setVisible={setRowContextVisible} curRow={curRow}
                             dataSource={dataSource} setDataSource={setDataSource} rom={mainRom}
                             checkCommands={checkCommands} rowIndex={rowIndex}/>
            </Content>
        </Layout>
    </>
})
export default App;
