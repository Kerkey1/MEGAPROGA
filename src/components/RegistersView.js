import React from 'react';
import {observer} from "mobx-react";
import {Input, Row} from "antd";
import '../App.css';

const RegistersView = observer(({reg, index}) => {

    return <>
        <Row className="classForRegisters">
            <Input addonBefore="R0" disabled="true" value={reg[index].R[0].toString(8)} defaultValue="0"/>
            <Input addonBefore="R1" disabled="true" value={reg[index].R[1].toString(8)} defaultValue="0"/>
            <Input addonBefore="R2" disabled="true" value={reg[index].R[2].toString(8)} defaultValue="0"/>
            <Input addonBefore="R3" disabled="true" value={reg[index].R[3].toString(8)} defaultValue="0"/>
            <Input addonBefore="R4" disabled="true" value={reg[index].R[4].toString(8)} defaultValue="0"/>
            <Input addonBefore="R5" disabled="true" value={reg[index].R[5].toString(8)} defaultValue="0"/>
            <Input addonBefore="R6" disabled="true" value={reg[index].R[6].toString(8)} defaultValue="0"/>
            <Input addonBefore="R7" disabled="true" value={reg[index].R[7].toString(8)} defaultValue="0"/>
            <Input addonBefore="R8" disabled="true" value={reg[index].R[8].toString(8)} defaultValue="0"/>
            <Input addonBefore="R9" disabled="true" value={reg[index].R[9].toString(8)} defaultValue="0"/>
            <Input addonBefore="R10" disabled="true" value={reg[index].R[10].toString(8)} defaultValue="0"/>
            <Input addonBefore="R11" disabled="true" value={reg[index].R[11].toString(8)} defaultValue="0"/>
            <Input addonBefore="R12" disabled="true" value={reg[index].R[12].toString(8)} defaultValue="0"/>
            <Input addonBefore="R13" disabled="true" value={reg[index].R[13].toString(8)} defaultValue="0"/>
            <Input addonBefore="R14" disabled="true" value={reg[index].R[14].toString(8)} defaultValue="0"/>
            <Input addonBefore="R15" disabled="true" value={reg[index].R[15].toString(8)} defaultValue="0"/>
            <Input addonBefore="RQ" disabled="true" value={reg[index].RQ.toString(8)} defaultValue="0"/>
            <Input addonBefore="RK" disabled="true" value={reg[index].RK.toString(8)} defaultValue="0"/>
            <Input addonBefore="RDI" disabled="true" value={reg[index].RDI.toString(8)} defaultValue="0"/>
            <Input addonBefore="RDO" disabled="true" value={reg[index].RDO.toString(8)} defaultValue="0"/>
            <Input addonBefore="MAR" disabled="true" value={reg[index].MAR.toString(8)} defaultValue="0"/>
            <Input addonBefore="BI" disabled="true" value={reg[index].BI.toString(8)} defaultValue="0"/>
            <Input addonBefore="ZI" disabled="true" value={reg[index].ZI.toString(8)} defaultValue="0"/>
            <Input addonBefore="CT" disabled="true" value={reg[index].CT.toString(8)} defaultValue="0"/>
            <Input addonBefore="CMK" disabled="true" value={reg[index].CMK.toString(8)} defaultValue="0"/>
            <Input addonBefore="ST0" disabled="true" value={reg[index].ST[0].toString(8)} defaultValue="0"/>
            <Input addonBefore="ST1" disabled="true" value={reg[index].ST[1].toString(8)} defaultValue="0"/>
            <Input addonBefore="ST2" disabled="true" value={reg[index].ST[2].toString(8)} defaultValue="0"/>
            <Input addonBefore="FLG" disabled="true" value={reg[index].FLG.toString(8)} defaultValue="0"/>
            <Input addonBefore="PSW" disabled="true" value={reg[index].PSW.toString(8)} defaultValue="0"/>
            <Input addonBefore="Z0" disabled="true" value={reg[index].ZO.toString(8)} defaultValue="0"/>
        </Row>

    </>
});
export default RegistersView;