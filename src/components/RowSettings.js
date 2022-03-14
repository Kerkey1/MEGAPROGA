import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {Col, Divider, Form, Modal, Row} from "antd";
import M12M14 from "./Select/M12M14";
import M5M6 from "./Select/M5M6";
import M11 from "./Select/M11";
import M13 from "./Select/M13";
import M1M15 from "./Select/M1M15";
import M2M3M4 from "./Select/M2M3M4";
import M7M8M9M10 from "./Select/M7M8M9M10";

const RowSettings = observer(({
                                  rowSettingsVisible,
                                  setRowSettingsVisible,
                                  command,
                                  curRow,
                                  Rom,
                                  EInvMaskM2,
                                  ECondM3,
                                  EJumpM4,
                                  EShiftControlM7,
                                  ECarryM8,
                                  EOperandsM9,
                                  EFuncM10,
                                  EResultM11,
                                  EInputM12,
                                  EPswM13,
                                  EOutputM14,
                                  form,
                                  values
                              }) => {

    // let initialValues;
    //
    // useEffect(() => {
    //         if (command[curRow] === undefined) {
    //             initialValues = values;
    //         } else {
    //             initialValues = command[curRow]
    //         }
    //         form.resetFields()
    //     },
    //     [initialValues]);

    const onCancel = (() => {
        setRowSettingsVisible(false);
    });

    const saveCommand = (data, curRow) => {
        command[curRow] = data;
        console.log(command[curRow]);
    };

    const onOk = (() => {
        let data = form.getFieldsValue();
        let saveData;
        // data.reg = parseInt(data.reg, 10);
        data.m1 = parseInt(data.m1, 10);
        data.m5 = parseInt(data.m5, 2);
        data.m6 = parseInt(data.m6, 2);
        data.m15 = parseInt(data.m15, 10);

        form.resetFields();
        Rom[curRow].SetFields(data);
        saveData = data;
        saveCommand(saveData, curRow);

        setRowSettingsVisible(false);
    });

    const onOkChanged = (() => {
        let data;
        let resData;
        resData = command[curRow];
        // data=command[curRow];

        data = form.getFieldsValue(null, meta => meta.touched);

        Object.assign(resData, data);
        resData.m1 = parseInt(resData.m1, 10);
        resData.m5 = parseInt(resData.m5, 2);
        resData.m6 = parseInt(resData.m6, 2);
        resData.m15 = parseInt(resData.m15, 10);
        Rom[curRow].SetFields(resData);
        command[curRow] = resData;
        console.log(command);

        setRowSettingsVisible(false);
    });


    return <>
        {command[curRow] === undefined ? <Modal
                visible={rowSettingsVisible}
                title="Create a new command"
                okText="Create"
                cancelText="Cancel"
                width={1800}
                onCancel={onCancel}
                onOk={onOk}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form"
                    wrapperCol={{
                        span: 50,
                    }}
                >

                    <Row justify="center">
                        <Col>
                            Входная и выходные шины
                            <M12M14 EInputM12={EInputM12} EOutputM14={EOutputM14} values={values}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Мультиплексоры адреса
                            <M5M6 values={values}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Приёмник результата {/*Исправить*/}
                            <M11 EResultM11={EResultM11} values={values}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Формирование PSW
                            <M13 EPswM13={EPswM13} values={values}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Поля констант
                            <M1M15 values={values}/>
                        </Col>
                    </Row>
                    <Divider type="horizontal" className="divider-horizontal"
                             style={{width: "100vw", backgroundColor: "#000", margin: "0px"}}/>
                    <Row justify="center">
                        <Col>
                            Переходы и условия переходов
                            <M2M3M4 EInvMaskM2={EInvMaskM2} ECondM3={ECondM3} EJumpM4={EJumpM4} form={form}
                                    values={values}/>
                        </Col>
                        <Divider type="vertical" style={{height: "400px", backgroundColor: "#000"}}/>
                        <Col>
                            Операции над данными
                            <M7M8M9M10 EShiftControlM7={EShiftControlM7} ECarryM8={ECarryM8} EOperandsM9={EOperandsM9}
                                       EFuncM10={EFuncM10} values={values}/>
                        </Col>
                    </Row>
                </Form>
            </Modal> :
            <Modal
                visible={rowSettingsVisible}
                title="Create a new command"
                okText="Create"
                cancelText="Cancel"
                width={1800}
                onCancel={onCancel}
                onOk={onOkChanged}
                destroyOnClose={true}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form"
                    wrapperCol={{
                        span: 50,
                    }}
                >

                    <Row justify="center">
                        <Col>
                            Входная и выходные шины
                            <M12M14 EInputM12={EInputM12} EOutputM14={EOutputM14} values={command[curRow]}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Мультиплексоры адреса
                            <M5M6 values={command[curRow]}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Приёмник результата {/*Исправить*/}
                            <M11 EResultM11={EResultM11} values={command[curRow]}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Формирование PSW
                            <M13 EPswM13={EPswM13} values={command[curRow]}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Поля констант
                            <M1M15 values={command[curRow]}/>
                        </Col>
                    </Row>
                    <Divider type="horizontal" className="divider-horizontal"
                             style={{width: "100vw", backgroundColor: "#000", margin: "0px"}}/>
                    <Row justify="center">
                        <Col>
                            Переходы и условия переходов
                            <M2M3M4 EInvMaskM2={EInvMaskM2} ECondM3={ECondM3} EJumpM4={EJumpM4} form={form}
                                    values={command[curRow]}/>
                        </Col>
                        <Divider type="vertical" style={{height: "400px", backgroundColor: "#000"}}/>
                        <Col>
                            Операции над данными
                            <M7M8M9M10 EShiftControlM7={EShiftControlM7} ECarryM8={ECarryM8} EOperandsM9={EOperandsM9}
                                       EFuncM10={EFuncM10} values={command[curRow]}/>
                        </Col>
                    </Row>
                </Form>
            </Modal>}

    </>
});
export default RowSettings;