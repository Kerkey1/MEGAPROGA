import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {Button, Col, Form, Layout, Row} from "antd";
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

const {Header, Footer, Content} = Layout;

let mainState = new Registers();
mainState.PSW = 1;

let mainRom = [];
let state_regs = [];
let temp_regs = [];
let command = [];
let tempRegs;

mainRom[0] = new Command();

const App = observer(() => {

    let value = {
        m1: null,
        m2: null,
        m3: null,
        m4: null,
        m5: null,
        m6: null,
        m7: null,
        m8: null,
        m9: null,
        m10: null,
        m11: null,
        m12: null,
        m13: null,
        m14: null,
        m15: null
    };

    const [form] = Form.useForm();
    const [z, setZ] = useState(0);
    const [data, setData] = useState();
    const [rowSettingsVisible, setRowSettingsVisible] = useState(false);
    const [curRow, setCurRow] = useState(0);

    let [dataSource, setDataSource] = useState([
        {
            key: '0',
            address: 0,
            command: 0,
        }
    ]);

    const columns = [
        {
            title: 'Address',
            dataIndex: 'address',
            width: '40%',
        },
        {
            title: 'Command',
            dataIndex: 'command',
            width: '40%',
            render: e => mainRom[e].Parse()
        }
    ];

    useEffect(() => {
        let i = 1;
        for (i in states) {
            temp_regs[i] = new Registers(states[i]);
        }
        setData(temp_regs);
    }, []);

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
    };

    const handleClick = () => {
        let j = z;
        j = j + 1;

        setZ(j);
        console.log(z, data[z].CMK);
    };


    const loadCommands = () => {
        console.log(mainRom);
        Exec(temp_regs[0], mainRom).then(v => tempRegs = v);
        console.log(tempRegs);
    };

    return <>
        <Layout>
            <Header>
                <Button onClick={handleClick}>Next</Button>
                <Button onClick={loadCommands}>Load Commands</Button>
                <Button>Clear commands</Button>
            </Header>
            <Content>
                <Row>

                    <Col span={6}>
                        {data && <TableComponent
                            setRowSettingsVisible={setRowSettingsVisible}
                            setCurRow={setCurRow}
                            dataSource={dataSource}
                            columns={columns}
                            addRow={addRow}
                            command={command}
                            value={value}
                            data={data}
                            z={z}
                        />}
                    </Col>
                    <Col span={18}>
                        {data &&
                        <RegistersView reg={data} index={z}/>}
                    </Col>
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
                        command={command}
                        form={form}
                        values={value}
                    />

                </Row>
            </Content>
            <Footer></Footer>
        </Layout>
    </>
})
export default App;
