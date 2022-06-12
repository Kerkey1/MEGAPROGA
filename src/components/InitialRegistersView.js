import React from 'react';
import {observer} from "mobx-react";
import {Input, Row} from "antd";
import '../App.css';

const InitialRegistersView = observer(({initialValues}) => {

    const onChange = (event, id) => {
        initialValues[id] = parseInt(event.target.value, 8)
    }

    return <Row className="classForRegisters">
        <Input addonBefore="R0" onChange={(e) => onChange(e, 16)} defaultValue={initialValues[16].toString(8)}/>
        <Input addonBefore="R1" onChange={(e) => onChange(e, 17)} defaultValue={initialValues[17].toString(8)}/>
        <Input addonBefore="R2" onChange={(e) => onChange(e, 18)} defaultValue={initialValues[18].toString(8)}/>
        <Input addonBefore="R3" onChange={(e) => onChange(e, 19)} defaultValue={initialValues[19].toString(8)}/>
        <Input addonBefore="R4" onChange={(e) => onChange(e, 20)} defaultValue={initialValues[20].toString(8)}/>
        <Input addonBefore="R5" onChange={(e) => onChange(e, 21)} defaultValue={initialValues[21].toString(8)}/>
        <Input addonBefore="R6" onChange={(e) => onChange(e, 22)} defaultValue={initialValues[22].toString(8)}/>
        <Input addonBefore="R7" onChange={(e) => onChange(e, 23)} defaultValue={initialValues[23].toString(8)}/>
        <Input addonBefore="R8" onChange={(e) => onChange(e, 24)} defaultValue={initialValues[24].toString(8)}/>
        <Input addonBefore="R9" onChange={(e) => onChange(e, 25)} defaultValue={initialValues[25].toString(8)}/>
        <Input addonBefore="R10" onChange={(e) => onChange(e, 26)} defaultValue={initialValues[26].toString(8)}/>
        <Input addonBefore="R11" onChange={(e) => onChange(e, 27)} defaultValue={initialValues[27].toString(8)}/>
        <Input addonBefore="R12" onChange={(e) => onChange(e, 28)} defaultValue={initialValues[28].toString(8)}/>
        <Input addonBefore="R13" onChange={(e) => onChange(e, 29)} defaultValue={initialValues[29].toString(8)}/>
        <Input addonBefore="R14" onChange={(e) => onChange(e, 30)} defaultValue={initialValues[30].toString(8)}/>
        <Input addonBefore="R15" onChange={(e) => onChange(e, 31)} defaultValue={initialValues[31].toString(8)}/>
        <Input addonBefore="RQ" onChange={(e) => onChange(e, 15)} defaultValue={initialValues[15].toString(8)}/>
        <Input addonBefore="RK" onChange={(e) => onChange(e, 5)} defaultValue={initialValues[5].toString(8)}/>
        <Input addonBefore="RDI" onChange={(e) => onChange(e, 8)} defaultValue={initialValues[8].toString(8)}/>
        <Input addonBefore="RDO" onChange={(e) => onChange(e, 9)} defaultValue={initialValues[9].toString(8)}/>
        <Input addonBefore="MAR" onChange={(e) => onChange(e, 10)} defaultValue={initialValues[10].toString(8)}/>
        <Input addonBefore="BI" onChange={(e) => onChange(e, 2)} defaultValue={initialValues[2].toString(8)}/>
        <Input addonBefore="ZI" onChange={(e) => onChange(e, 4)} defaultValue={initialValues[4].toString(8)}/>
        <Input addonBefore="CT" onChange={(e) => onChange(e, 32)} defaultValue={initialValues[32].toString(8)}/>
        <Input addonBefore="CMK" onChange={(e) => onChange(e, 7)} defaultValue={initialValues[7].toString(8)}/>
        <Input addonBefore="ST0" onChange={(e) => onChange(e, 12)} defaultValue={initialValues[12].toString(8)}/>
        <Input addonBefore="ST1" onChange={(e) => onChange(e, 13)} defaultValue={initialValues[13].toString(8)}/>
        <Input addonBefore="ST2" onChange={(e) => onChange(e, 14)} defaultValue={initialValues[14].toString(8)}/>
        <Input addonBefore="FLG" onChange={(e) => onChange(e, 1)} defaultValue={initialValues[1].toString(8)}/>
        <Input addonBefore="PSW" onChange={(e) => onChange(e, 0)} defaultValue={initialValues[0].toString(8)}/>
        <Input addonBefore="Z0" onChange={(e) => onChange(e, 6)} defaultValue={initialValues[6].toString(8)}/>
    </Row>

});
export default InitialRegistersView;