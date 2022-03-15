import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {Col, Input, Row} from "antd";
import '../App.css';
import {states} from "../Consts/ConstM";
import Registers from "../Logic/Reg";

const RegistersView = observer(({reg, index}) => {

    // useEffect(()=>{
    //    reg[index]
    // },[]);

    return <>
        <Row className="classForRegisters">
            <Input addonBefore="R0" disabled={true} value={reg[index].R[0]} defaultValue="0"/>
            <Input addonBefore="R1" disabled={true} value={reg[index].R[1]} defaultValue="0"/>
            <Input addonBefore="R2" disabled={true} value={reg[index].R[2]} defaultValue="0"/>
            <Input addonBefore="R3" disabled={true} value={reg[index].R[3]} defaultValue="0"/>
            <Input addonBefore="R4" disabled={true} value={reg[index].R[4]} defaultValue="0"/>
            <Input addonBefore="R5" disabled={true} value={reg[index].R[5]} defaultValue="0"/>
            <Input addonBefore="R6" disabled={true} value={reg[index].R[6]} defaultValue="0"/>
            <Input addonBefore="R7" disabled={true} value={reg[index].R[7]} defaultValue="0"/>
            <Input addonBefore="R8" disabled={true} value={reg[index].R[8]} defaultValue="0"/>
            <Input addonBefore="R9" disabled={true} value={reg[index].R[9]} defaultValue="0"/>
            <Input addonBefore="R10" disabled={true} value={reg[index].R[10]} defaultValue="0"/>
            <Input addonBefore="R11" disabled={true} value={reg[index].R[11]} defaultValue="0"/>
            <Input addonBefore="R12" disabled={true} value={reg[index].R[12]} defaultValue="0"/>
            <Input addonBefore="R13" disabled={true} value={reg[index].R[13]} defaultValue="0"/>
            <Input addonBefore="R14" disabled={true} value={reg[index].R[14]} defaultValue="0"/>
            <Input addonBefore="R15" disabled={true} value={reg[index].R[15]} defaultValue="0"/>
            <Input addonBefore="R16" disabled={true} value={reg[index].R[16]} defaultValue="0"/>
            <Input addonBefore="R17" disabled={true} value={reg[index].R[17]} defaultValue="0"/>
            <Input addonBefore="RQ" disabled={true} value={reg[index].RQ} defaultValue="0"/>
            <Input addonBefore="RK" disabled={true} value={reg[index].RK} defaultValue="0"/>
            <Input addonBefore="RDI" disabled={true} value={reg[index].RDI} defaultValue="0"/>
            <Input addonBefore="RDO" disabled={true} value={reg[index].RDO} defaultValue="0"/>
            <Input addonBefore="MAR" disabled={true} value={reg[index].MAR} defaultValue="0"/>
            <Input addonBefore="BI" disabled={true} value={reg[index].BI} defaultValue="0"/>
            <Input addonBefore="ZI" disabled={true} value={reg[index].ZI} defaultValue="0"/>
            <Input addonBefore="YBC" disabled={true} defaultValue="0"/>
            <Input addonBefore="DBC" disabled={true}  defaultValue="0"/>
            <Input addonBefore="CT" disabled={true} value={reg[index].CT} defaultValue="0"/>
            <Input addonBefore="DBU" disabled={true} defaultValue="0"/>
            <Input addonBefore="PQ15" disabled={true}  defaultValue="0"/>
            <Input addonBefore="PQ0" disabled={true} defaultValue="0"/>
            <Input addonBefore="CMK" disabled={true} value={reg[index].CMK} defaultValue="0"/>
            <Input addonBefore="RA" disabled={true} defaultValue="0"/>
            <Input addonBefore="ST0" disabled={true} value={reg[index].ST[0]} defaultValue="0"/>
            <Input addonBefore="ST1" disabled={true} value={reg[index].ST[1]} defaultValue="0"/>
            <Input addonBefore="ST2" disabled={true} value={reg[index].ST[2]} defaultValue="0"/>
            <Input addonBefore="ST3" disabled={true} value={reg[index].ST[2]} defaultValue="0"/>
            <Input addonBefore="FLG" disabled={true} value={reg[index].FLG} defaultValue="0"/>
            <Input addonBefore="PSW" disabled={true} value={reg[index].PSW} defaultValue="0"/>
            <Input addonBefore="C0" disabled={true}  defaultValue="0"/>
            <Input addonBefore="C16" disabled={true} defaultValue="0"/>
            <Input addonBefore="OVR" disabled={true}  defaultValue="0"/>
            <Input addonBefore="Z" disabled={true} value={reg[index].Z} defaultValue="0"/>
            <Input addonBefore="F15" disabled={true} defaultValue="0"/>
            <Input addonBefore="TST" disabled={true}  defaultValue="0"/>
            <Input addonBefore="PR15" disabled={true} defaultValue="0"/>
            <Input addonBefore="PR0" disabled={true} defaultValue="0"/>
        </Row>
    </>
});
export default RegistersView;