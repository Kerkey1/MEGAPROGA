import React from 'react';
import {observer} from "mobx-react";
import {Col, Input, Row} from "antd";
import '../App.css';

const RegistersView = observer(() => {

    return <>
        <Row justify="start">
            <Col className="classForRegisters">
                <Input addonBefore="R0"  disabled={true} defaultValue="0"/>
                <Input addonBefore="R9" disabled={true} defaultValue="0"/>
                <Input addonBefore="RQ" disabled={true} defaultValue="0"/>
                <Input addonBefore="CT" disabled={true} defaultValue="0"/>
                <Input addonBefore="ST3" disabled={true} defaultValue="0"/>
                <Input addonBefore="FLG" disabled={true} defaultValue="0"/>
            </Col>
            <Col className="classForRegisters">
                <Input addonBefore="R1" disabled={true} defaultValue="0"/>
                <Input addonBefore="R10" disabled={true} defaultValue="0"/>
                <Input addonBefore="RK" disabled={true} defaultValue="0"/>
                <Input addonBefore="DBU" disabled={true} defaultValue="0"/>
                <Input addonBefore="PSW" disabled={true} defaultValue="0"/>
                <Input addonBefore="C0" disabled={true} defaultValue="0"/>
            </Col>
            <Col className="classForRegisters">
                <Input addonBefore="R2" disabled={true} defaultValue="0"/>
                <Input addonBefore="R11" disabled={true} defaultValue="0"/>
                <Input addonBefore="RDI" disabled={true} defaultValue="0"/>
                <Input addonBefore="PQ15" disabled={true} defaultValue="0"/>
                <Input addonBefore="C16" disabled={true} defaultValue="0"/>
            </Col>
            <Col className="classForRegisters">
                <Input addonBefore="R3" disabled={true} defaultValue="0"/>
                <Input addonBefore="R12" disabled={true} defaultValue="0"/>
                <Input addonBefore="RDO" disabled={true} defaultValue="0"/>
                <Input addonBefore="PQ0" disabled={true} defaultValue="0"/>
                <Input addonBefore="OVR" disabled={true} defaultValue="0"/>
            </Col>
            <Col className="classForRegisters">
                <Input addonBefore="R4" disabled={true} defaultValue="0"/>
                <Input addonBefore="R13" disabled={true} defaultValue="0"/>
                <Input addonBefore="MAR" disabled={true} defaultValue="0"/>
                <Input addonBefore="CMK" disabled={true} defaultValue="0"/>
                <Input addonBefore="Z" disabled={true} defaultValue="0"/>
            </Col>
            <Col className="classForRegisters">
                <Input addonBefore="R5" disabled={true} defaultValue="0"/>
                <Input addonBefore="R14" disabled={true} defaultValue="0"/>
                <Input addonBefore="BI" disabled={true} defaultValue="0"/>
                <Input addonBefore="RA" disabled={true} defaultValue="0"/>
                <Input addonBefore="F15" disabled={true} defaultValue="0"/>
            </Col>

            <Col className="classForRegisters">
                <Input addonBefore="R6" disabled={true} defaultValue="0"/>
                <Input addonBefore="R15" disabled={true} defaultValue="0"/>
                <Input addonBefore="ZI" disabled={true} defaultValue="0"/>
                <Input addonBefore="ST0" disabled={true} defaultValue="0"/>
                <Input addonBefore="TST" disabled={true} defaultValue="0"/>
            </Col>
            <Col className="classForRegisters">
                <Input addonBefore="R7" disabled={true} defaultValue="0"/>
                <Input addonBefore="R16" disabled={true} defaultValue="0"/>
                <Input addonBefore="DBC" disabled={true} defaultValue="0"/>
                <Input addonBefore="ST1" disabled={true} defaultValue="0"/>
                <Input addonBefore="PR15" disabled={true} defaultValue="0"/>
            </Col>
            <Col className="classForRegisters">
                <Input addonBefore="R8" disabled={true} defaultValue="0"/>
                <Input addonBefore="R17" disabled={true} defaultValue="0"/>
                <Input addonBefore="YBC" disabled={true} defaultValue="0"/>
                <Input addonBefore="ST2" disabled={true} defaultValue="0"/>
                <Input addonBefore="PR0" disabled={true} defaultValue="0"/>
            </Col>
        </Row>
    </>
});
export default RegistersView;