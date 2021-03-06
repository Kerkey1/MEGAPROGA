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
const getInitialValues = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let initialValues = [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const App = observer(() => {
    const [form] = Form.useForm()
    const [z, setZ] = useState(0)
    const [rowSettingsVisible, setRowSettingsVisible] = useState(false)
    const [rowContextVisible, setRowContextVisible] = useState(false)
    const [curRow, setCurRow] = useState(0)
    const [redact, setRedact] = useState(true)
    let [dataSource, setDataSource] = useState([{
        key: 0,
        address: 0,
        command: 0
    }])
    const [tact, setTact] = useState(0)
    const [rowIndex, setRowIndex] = useState()

    useEffect(() => {
        document.getElementById('file').addEventListener('change', onChange);
    }, [])

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

        for (i + 1; i < v.length; i++) {
            temp = v[i - z - 1]
            temp_regs[i] = new Registers(temp)
        }
        regs = temp_regs

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
        writeDataIntoTable(obj.commands, obj.commands.length)
    }

    const writeDataIntoTable = (name, length) => {
        for (let i = 0; i < length; i++) {
            checkCommands[i] = true
            mainRom[i] = new Command(BigInt(name[i]))
        }
        for (let i = 0; i < length; i++) {
            let newRow = {
                key: i,
                address: i,
                command: i,
            }
            if (i === 0 || mainRom[i].Raw().toString() !== "0") {
                setDataSource(pre => {
                    return [...pre, newRow]
                })
            }
        }
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
        initialValues = getInitialValues
    }

    const addRow = () => {
        let maxIndex = -1;
        let maxAddress = -1;

        for (let i = 0; i < dataSource.length; i++) {
            if (dataSource[i].key >= maxIndex)
                maxIndex = dataSource[i].key + 1
            if (dataSource[i].address >= maxAddress)
                maxAddress = dataSource[i].address + 1
        }

        if (maxAddress > -1) {
            mainRom[maxAddress] = new Command();
            const newRow = {
                key: maxIndex,
                address: maxAddress,
                command: maxAddress,
            }
            setDataSource(pre => {
                return [...pre, newRow];
            })
        }
    }

    const startTesting = () => {

        if (!tact) {
            alert("Введите количество тактов!")
        } else if (tact < 1 || tact > 4096) {
            alert("Количество тактов должно быть не меньше 1, не больше 4096")
        } else {
            start_regs = new Registers(initialValues)
            Exec(start_regs, mainRom, z, tact).then((v) => setRegister(v))
                .then(() => regs[z] = new Registers(initialValues)).then(() => setRedact(false)).then(() => setZ(z + 1))
        }
    }

    const loadCommands = () => {
        let temp = document.getElementById('file')
        temp.click()
    }

    const saveCommands = () => {
        let result = {
            commands: []
        }
        for (let i = 0; i < mainRom.length; i++) {
            if (!mainRom[i])
                mainRom[i] = new Command(0)
            result.commands.push(mainRom[i].Raw().toString())
        }

        saveJsonObjToFile(result)
    }

    const clearCommands = () => {
        const newRow = {
            key: 0,
            address: 0,
            command: 0,
        }

        checkCommands = []
        mainRom = []
        regs = undefined
        temp_regs = []
        setZ(0)
        mainRom[0] = new Command()
        setRedact(true)
        initialValues = getInitialValues
        setDataSource([newRow])
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
                            <Menu.Item key="0" icon={<StepForwardOutlined/>} disabled={redact} onClick={nextStep}>
                                Далее
                            </Menu.Item>
                            <Menu.Item key="1" icon={<StepBackwardOutlined/>} disabled={redact} onClick={prevStep}>
                                Назад
                            </Menu.Item>
                            <Menu.Item key="2" icon={<PauseOutlined/>} disabled={redact} onClick={pause}>
                                Пауза
                            </Menu.Item>
                            <Menu.Item key="3" icon={<CaretRightOutlined/>} disabled={!redact} onClick={startTesting}>
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
