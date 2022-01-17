import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {Col, Layout, Row} from "antd";
import './App.css';
import "antd/dist/antd.css";
import TableComponent from "./components/TableComponent";
import RowSettings from "./components/RowSettings";
import Registers from "./Logic/Reg";
import Command from "./Logic/Command";


let mainState = new Registers();
mainState.PSW = 1;
let mainRom = [new Command(), new Command(), new Command(), new Command(), new Command()]
const {Header, Footer, Content} = Layout;

const App = observer(() => {

    const EInvMaskM2 = {
        NNOT: 0,
        NOT: 1,
        NNOT_MASK: 2,
        NOT_MASK: 3,
    };

    const ECondM3 = {
        PSW0: 0,
        PSW1: 1,
        PSW2: 2,
        PSW3: 3,
        PSW4: 4,
        PSW5: 5,
        CT: 6,
        CONSTZ: 7,
        FLG0: 8,
        FLG1: 9,
        FLG2: 10,
        FLG3: 11,
        FLG4: 12,
        FLG5: 13,
        FLG6: 14,
        FLG7: 15,

        /*Óðîâüíü 1*/
        LV1: 8,
        /*Óðîâüíü 2.1*/
        LV21: 9,
        /*Óðîâüíü 2.2*/
        LV22: 10,
        /*Óðîâüíü 3*/
        LV3: 11,
        /*Óðîâüíü 4*/
        LV4: 12,
        /*Óðîâüíü 5*/
        LV5: 13,
        /*RK[11/9] == 0*/
        RK119: 15,
        /*RK[5/3] == 0*/
        RK53: 15,
    };

    const EJumpM4 = {
        JZ: 1,
        CJS: 2,
        JMAP: 3,
        CJP: 4,
        PUSH: 5,
        JSRP: 6,
        CJV: 7,
        JRP: 8,
        RFCT: 9,
        RPCT: 10,
        CRTN: 11,
        CJPP: 12,
        LDCT: 13,
        LOOP: 14,
        CONT: 15,
        JP: 16,
    };

    const ECarryM8 = {
        _0: 0,
        _1: 1,
        CARRY_TO_PSW: 2,
        NCARRY_TO_PSW: 3
    };

    const EOperandsM9 = {
        AQ: 0,
        AB: 1,
        ZQ: 2,
        ZB: 3,
        ZA: 4,
        DA: 5,
        DQ: 6,
        DZ: 7
    };

    const EFuncM10 = {
        ADD: 0,
        SUBS: 1,
        SUBR: 2,
        OR: 3,
        AND: 4,
        NRAND: 5,
        XOR: 6,
        NRXOR: 7
    };

    const EResultM11 = {
        FQ: 0,
        NOP: 1,
        FBA: 2,
        FBF: 3,
        RSH_FBQ: 4,
        RSH_FB: 5,
        LSH_BFQ: 6,
        LSH_BF: 7
    };

    const EInputM12 = {
        RDID: 0,
        ZID: 1,
        M1D: 2,
        PSWD: 3,
        RDID_BIRDI: 4,
        ZID_BIRDI: 5,
        M1D_BIRDI: 6,
        RDID_BIRDI_BIRK: 7
    };

    const EPswM13 = {
        SAVE: 0,
        LD_FROM_FLAGS: 1,
        LD_WITH_SHIFT: 2,
        LD_FROM_Y: 3
    };

    const EOutputM14 = {
        NONE: 0,
        YRDO: 1,
        YMAR: 2
    };

    let dataSource = [
        {
            key: '0',
            address: 0,
            command: mainRom[0].Parse()
        },
        {
            key: '1',
            address: 3,
            command: mainRom[3].Parse()
        }
    ];

    const commandArray=[];
    const [rowSettingsVisible, setRowSettingsVisible] = useState(false);
    const [curRow, setCurRow] = useState(0);

    return <>
        <Layout>
            <Header>ddd</Header>
            <Content>
                <Row>
                    <Col span={12}><TableComponent
                        setRowSettingsVisible={setRowSettingsVisible}
                        setCurRow={setCurRow}
                        curRow={curRow}
                        Rom={mainRom}
                        dataSource={dataSource}
                    />
                    </Col>
                    <Col span={12}>col-12</Col>
                    <RowSettings
                        rowSettingsVisible={rowSettingsVisible}
                        setRowSettingsVisible={setRowSettingsVisible}
                        commandArray={commandArray}
                        curRow={curRow}
                        EInvMaskM2={EInvMaskM2}
                        ECondM3={ECondM3}
                        EJumpM4={EJumpM4}
                        ECarryM8={ECarryM8}
                        EOperandsM9={EOperandsM9}
                        EFuncM10={EFuncM10}
                        EResultM11={EResultM11}
                        EInputM12={EInputM12}
                        EPswM13={EPswM13}
                        EOutputM14={EOutputM14}
                        Rom={mainRom}
                    />
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    </>
})
export default App;
