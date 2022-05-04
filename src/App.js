import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {Col, Form, Input, Layout, Menu, Row} from "antd";
import './App.css';
import './index.css'
import 'antd/dist/antd.css';
import TableComponent from "./components/TableComponent";
import RowSettings from "./components/RowSettings";
import Registers from "./Logic/Reg";
import Command from "./Logic/Command";
import {Exec} from "./Funcrions/FunctionsForBack";
import RegistersView from "./components/RegistersView";
import {
    ECarryM8,
    ECondM3,
    EFuncM10, EInputM12,
    EInvMaskM2,
    EJumpM4,
    EOperandsM9,
    EOutputM14, EPswM13, EResultM11,
    EShiftControlM7, states
} from "./Consts/ConstM";
import {
    CaretRightOutlined,
    ClearOutlined,
    DownloadOutlined,
    MinusSquareFilled, PauseOutlined, PlusOutlined, StepBackwardOutlined, StepForwardOutlined,
    UploadOutlined
} from "@ant-design/icons";
import InitialRegistersView from "./components/InitialRegistersView";

const {Content} = Layout;

let mainRom = []
let start_regs = []
let temp_regs = []
let regs
mainRom[0] = new Command()
let initialValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

const App = observer(() => {

    const [form] = Form.useForm()
    const [z, setZ] = useState(0)
    const [rowSettingsVisible, setRowSettingsVisible] = useState(false)
    const [curRow, setCurRow] = useState(0)
    const [redact, setRedact] = useState(true)
    let [dataSource, setDataSource] = useState([])
    const [tact, setTact] = useState(0)

    useEffect(() => {
        document.getElementById('file').addEventListener('change', onChange);
    }, [])

    const columns = [
        {
            title: 'Адрес',
            dataIndex: 'address',
            width: '40%',
        },
        {
            title: 'Команда',
            dataIndex: 'command',
            width: '40%',
            render: e => mainRom[e].Parse()
        }
    ];

    // ВСПОМОГАТЕЛЬНЫЕ
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
                regs = temp_regs
            }
        } else {
            for (i + 1; i < v.result.length; i++) {
                temp = v.result[i - z - 1]
                temp_regs[i] = new Registers(temp)
                regs = temp_regs
            }
        }
    }


    function onChange(event) {
        let reader = new FileReader()
        reader.onload = onReaderLoad
        reader.readAsText(event.target.files[0])
    }

    function onReaderLoad(event) {
        console.log(event.target.result)
        let obj = JSON.parse(event.target.result)
        console.log(obj.commands.length)
        alert_data(obj.commands, obj.commands.length)
    }

    function alert_data(name, length) {
        for (let i = 0; i < length; i++) {
            mainRom[i] = new Command(name[i])
            console.log(mainRom[i].Parse())
        }
        console.log(mainRom)
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
    }

    // ФУНКЦИИ КНОПОК
    const nextStep = () => {
        let j = z
        j = j + 1
        setZ(j)
        console.log(z)
    }

    const prevStep = () => {
        if (z > 0) {
            let j = z;
            j = j - 1;
            setZ(j)
        }
        console.log(z)
    }

    const pause = () => {
        let temp = (regs[z].ToString()).split(',')
        initialValues = temp.map(string => parseInt(string))
        console.log(initialValues)

        setRedact(true)
    }

    const stop = () => {
        setZ(0)
        setRedact(true)
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
        console.log(initialValues)
        start_regs = new Registers(initialValues)
        if (z > 0) {
            regs[z] = new Registers(initialValues)
            console.log(regs[z])
        }

        console.log(start_regs)
        Exec(start_regs, mainRom, z, tact).then((v) => setRegister(v))
        setRedact(false)
    }

    const loadCommands = () => {
        setDataSource([])
        mainRom = []
        setZ(0)
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
        mainRom = []
    }

    const setTactCount = (event) => {
        setTact(event.target.value)
        console.log(event.target.value)
    }

    return <>
        <Layout>
            <Content>
                <Row>
                    <Col span={1}>
                        <Menu
                            mode="inline"
                            theme="dark"
                            style={{height: "100vh", width: "auto"}}
                            inlineCollapsed={true}
                            selectable={false}
                        >
                            <Input onChange={e => setTactCount(e)} defaultValue="0"/>
                            <Menu.Item key="0" icon={<StepForwardOutlined/>} onClick={nextStep}>
                                Далее
                            </Menu.Item>
                            <Menu.Item key="1" icon={<StepBackwardOutlined/>} onClick={prevStep}>
                                Назад
                            </Menu.Item>
                            <Menu.Item key="2" icon={<PauseOutlined/>} onClick={pause}>
                                Начать отладку
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
                    <Col span={6}>
                        <TableComponent
                            setRowSettingsVisible={setRowSettingsVisible}
                            setCurRow={setCurRow}
                            dataSource={dataSource}
                            columns={columns}
                            addRow={addRow}
                            form={form}
                            data={regs}
                            Rom={mainRom}
                            z={z}
                        />
                    </Col>
                    <Col span={17}>{redact ? <InitialRegistersView initialValues={initialValues}/> :
                        <RegistersView reg={regs} index={z} redact={redact} initialValues={initialValues}/>}
                    </Col>
                </Row>
                <RowSettings
                    rowSettingsVisible={rowSettingsVisible}
                    setRowSettingsVisible={setRowSettingsVisible}
                    curRow={curRow}
                    EInvMaskM2={EInvMaskM2}
                    ECondM3={ECondM3}
                    EJumpM4={EJumpM4}
                    EShiftControlM7={EShiftControlM7}
                    ECarryM8={ECarryM8}
                    EOperandsM9={EOperandsM9}
                    EFuncM10={EFuncM10}
                    EResultM11={EResultM11}
                    EInputM12={EInputM12}
                    EPswM13={EPswM13}
                    EOutputM14={EOutputM14}
                    Rom={mainRom}
                    dataSource={dataSource}
                    form={form}
                />
                <input id="file" type="file"/>
            </Content>
        </Layout>
    </>
})
export default App;
