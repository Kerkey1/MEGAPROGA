import React from 'react';
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
                              }) => {


        let initialValue = {
            m1: 0,
            m2: 0,
            m3: 0,
            m4: 16,
            m5: 0,
            m6: 0,
            m7: 0,
            m8: 0,
            m9: 7,
            m10: 0,
            m11: 3,
            m12: 0,
            m13: 0,
            m14: 2,
            m15: 0
        }

        const onCancel = (() => {
            form.resetFields();
            setRowSettingsVisible(false);
        });

        const onOk = (() => {
            let data = form.getFieldsValue();
            data.m1 = parseInt(data.m1, 10);
            data.m5 = parseInt(data.m5, 2);
            data.m6 = parseInt(data.m6, 2);
            data.m15 = parseInt(data.m15, 10);

            form.resetFields();
            Rom[curRow].SetFields(data);
            console.log(Rom[curRow]);
            setRowSettingsVisible(false);
        });

        return <>
            <Modal
                visible={rowSettingsVisible}
                title="Создать новую команду"
                okText="Сохранить"
                cancelText="Отмена"
                width={1800}
                onCancel={onCancel}
                onOk={onOk}
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="form"
                    initialValues={initialValue}
                    wrapperCol={{
                        span: 50,
                    }}
                >
                    <Row justify="center">
                        <Col>
                            Входная и выходные шины
                            <M12M14 EInputM12={EInputM12} EOutputM14={EOutputM14}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Мультиплексоры адреса
                            <M5M6/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col style={{width: "500px"}}>
                            Приёмник результата
                            <M11 EResultM11={EResultM11}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Формирование PSW
                            <M13 EPswM13={EPswM13}/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Поля констант
                            <M1M15/>
                        </Col>
                    </Row>
                    <Divider type="horizontal" className="divider-horizontal"
                             style={{width: "100vw", backgroundColor: "#000", margin: "0px"}}/>
                    <Row justify="center">
                        <Col>
                            Переходы и условия переходов
                            <M2M3M4 EInvMaskM2={EInvMaskM2} ECondM3={ECondM3} EJumpM4={EJumpM4} form={form}/>
                        </Col>
                        <Divider type="vertical" style={{height: "400px", backgroundColor: "#000"}}/>
                        <Col>
                            Операции над данными
                            <M7M8M9M10 EShiftControlM7={EShiftControlM7} ECarryM8={ECarryM8} EOperandsM9={EOperandsM9}
                                       EFuncM10={EFuncM10}/>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    })
;
export default RowSettings;