import React from 'react';
import {observer} from "mobx-react";
import {Input, Row} from "antd";
import '../App.css';

const RegistersView = observer(({reg, index, redact, initialValues}) => {

    const onChange = (event, id) => {
        initialValues[id] = parseInt(event.target.value, 10)
        console.log(initialValues)
    }

    const curRegsOnChange = (event) => {
        console.log(event.target)
    }

    return <>
        {redact === true ?
            <form>
                <Row className="classForRegisters">
                    <Input addonBefore="R0" onChange={(e) => onChange(e, 16)} defaultValue={initialValues[16]}/>
                    <Input addonBefore="R1" onChange={(e) => onChange(e, 17)} defaultValue={initialValues[17]}/>
                    <Input addonBefore="R2" onChange={(e) => onChange(e, 18)} defaultValue={initialValues[18]}/>
                    <Input addonBefore="R3" onChange={(e) => onChange(e, 19)} defaultValue={initialValues[19]}/>
                    <Input addonBefore="R4" onChange={(e) => onChange(e, 20)} defaultValue={initialValues[20]}/>
                    <Input addonBefore="R5" onChange={(e) => onChange(e, 21)} defaultValue={initialValues[21]}/>
                    <Input addonBefore="R6" onChange={(e) => onChange(e, 22)} defaultValue={initialValues[22]}/>
                    <Input addonBefore="R7" onChange={(e) => onChange(e, 23)} defaultValue={initialValues[23]}/>
                    <Input addonBefore="R8" onChange={(e) => onChange(e, 24)} defaultValue={initialValues[24]}/>
                    <Input addonBefore="R9" onChange={(e) => onChange(e, 25)} defaultValue={initialValues[25]}/>
                    <Input addonBefore="R10" onChange={(e) => onChange(e, 26)} defaultValue={initialValues[26]}/>
                    <Input addonBefore="R11" onChange={(e) => onChange(e, 27)} defaultValue={initialValues[27]}/>
                    <Input addonBefore="R12" onChange={(e) => onChange(e, 28)} defaultValue={initialValues[28]}/>
                    <Input addonBefore="R13" onChange={(e) => onChange(e, 29)} defaultValue={initialValues[29]}/>
                    <Input addonBefore="R14" onChange={(e) => onChange(e, 30)} defaultValue={initialValues[30]}/>
                    <Input addonBefore="R15" onChange={(e) => onChange(e, 31)} defaultValue={initialValues[31]}/>
                    <Input addonBefore="RQ" onChange={(e) => onChange(e, 15)} defaultValue={initialValues[15]}/>
                    <Input addonBefore="RK" onChange={(e) => onChange(e, 5)} defaultValue={initialValues[5]}/>
                    <Input addonBefore="RDI" onChange={(e) => onChange(e, 8)} defaultValue={initialValues[8]}/>
                    <Input addonBefore="RDO" onChange={(e) => onChange(e, 9)} defaultValue={initialValues[9]}/>
                    <Input addonBefore="MAR" onChange={(e) => onChange(e, 10)} defaultValue={initialValues[10]}/>
                    <Input addonBefore="BI" onChange={(e) => onChange(e, 2)} defaultValue={initialValues[2]}/>
                    <Input addonBefore="ZI" onChange={(e) => onChange(e, 4)} defaultValue={initialValues[4]}/>
                    <Input addonBefore="CT" onChange={(e) => onChange(e, 32)} defaultValue={initialValues[32]}/>
                    <Input addonBefore="CMK" onChange={(e) => onChange(e, 7)} defaultValue={initialValues[7]}/>
                    <Input addonBefore="ST0" onChange={(e) => onChange(e, 12)} defaultValue={initialValues[12]}/>
                    <Input addonBefore="ST1" onChange={(e) => onChange(e, 13)} defaultValue={initialValues[13]}/>
                    <Input addonBefore="ST2" onChange={(e) => onChange(e, 14)} defaultValue={initialValues[14]}/>
                    <Input addonBefore="FLG" onChange={(e) => onChange(e, 1)} defaultValue={initialValues[1]}/>
                    <Input addonBefore="PSW" onChange={(e) => onChange(e, 0)} defaultValue={initialValues[0]}/>
                    <Input addonBefore="Z0" onChange={(e) => onChange(e, 6)} defaultValue={initialValues[6]}/>
                </Row></form> : reg && <Row className="classForRegisters">
            <Input addonBefore="R0" onChange={(e) => curRegsOnChange(e)} value={reg[index].R[0]} defaultValue="0"/>
            <Input addonBefore="R1" value={reg[index].R[1]} defaultValue="0"/>
            <Input addonBefore="R2" value={reg[index].R[2]} defaultValue="0"/>
            <Input addonBefore="R3" value={reg[index].R[3]} defaultValue="0"/>
            <Input addonBefore="R4" value={reg[index].R[4]} defaultValue="0"/>
            <Input addonBefore="R5" value={reg[index].R[5]} defaultValue="0"/>
            <Input addonBefore="R6" value={reg[index].R[6]} defaultValue="0"/>
            <Input addonBefore="R7" value={reg[index].R[7]} defaultValue="0"/>
            <Input addonBefore="R8" value={reg[index].R[8]} defaultValue="0"/>
            <Input addonBefore="R9" value={reg[index].R[9]} defaultValue="0"/>
            <Input addonBefore="R10" value={reg[index].R[10]} defaultValue="0"/>
            <Input addonBefore="R11" value={reg[index].R[11]} defaultValue="0"/>
            <Input addonBefore="R12" value={reg[index].R[12]} defaultValue="0"/>
            <Input addonBefore="R13" value={reg[index].R[13]} defaultValue="0"/>
            <Input addonBefore="R14" value={reg[index].R[14]} defaultValue="0"/>
            <Input addonBefore="R15" value={reg[index].R[15]} defaultValue="0"/>
            <Input addonBefore="R16" value={reg[index].R[16]} defaultValue="0"/>
            <Input addonBefore="R17" value={reg[index].R[17]} defaultValue="0"/>
            <Input addonBefore="RQ" value={reg[index].RQ} defaultValue="0"/>
            <Input addonBefore="RK" value={reg[index].RK} defaultValue="0"/>
            <Input addonBefore="RDI" value={reg[index].RDI} defaultValue="0"/>
            <Input addonBefore="RDO" value={reg[index].RDO} defaultValue="0"/>
            <Input addonBefore="MAR" value={reg[index].MAR} defaultValue="0"/>
            <Input addonBefore="BI" value={reg[index].BI} defaultValue="0"/>
            <Input addonBefore="ZI" value={reg[index].ZI} defaultValue="0"/>
            <Input addonBefore="CT" value={reg[index].CT} defaultValue="0"/>
            <Input addonBefore="CMK" value={reg[index].CMK} defaultValue="0"/>
            <Input addonBefore="ST0" value={reg[index].ST[0]} defaultValue="0"/>
            <Input addonBefore="ST1" value={reg[index].ST[1]} defaultValue="0"/>
            <Input addonBefore="ST2" value={reg[index].ST[2]} defaultValue="0"/>
            <Input addonBefore="FLG" value={reg[index].FLG} defaultValue="0"/>
            <Input addonBefore="PSW" value={reg[index].PSW} defaultValue="0"/>
            <Input addonBefore="Z" value={reg[index].Z} defaultValue="0"/>
        </Row>}

    </>
});
export default RegistersView;