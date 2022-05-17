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
                                  form,
                                  checkCommands
                              }) => {

        const onCancel = (() => {
            form.resetFields();
            setRowSettingsVisible(false);
        });

        const onOk = (() => {
            let data = form.getFieldsValue();
            data.m1 = parseInt(data.m1, 8);
            data.m5 = parseInt(data.m5, 2);
            data.m6 = parseInt(data.m6, 2);
            data.m15 = parseInt(data.m15, 8);

            form.resetFields();
            checkCommands[curRow] = true;
            Rom[curRow].SetFields(data);
            setRowSettingsVisible(false);
            console.log(Rom)
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
                    style={{border:"1px solid black"}}
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
                            <M12M14/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Мультиплексоры адреса
                            <M5M6/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col style={{width: "500px"}}>
                            Приёмник результата М11
                            <Row className="rowM11">
                                <Col className="colM11">
                                    <Row className="rowM11-1">ROH</Row>
                                    <Row className="rowM11-2">
                                        <Col>Сдвиг</Col>
                                        <Col>Загрузка</Col>
                                    </Row>
                                </Col>
                                <Col className="colM11">
                                    <Row className="rowM11-1">RQ</Row>
                                    <Row className="rowM11-2">
                                        <Col>Сдвиг</Col>
                                        <Col>Загрузка</Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <Row className="rowM11-1">Выход</Row>
                                    <Row className="rowM11-1">Y</Row>
                                </Col>
                            </Row>
                            <M11/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Формирование PSW
                            <M13/>
                        </Col>
                        <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                        <Col>
                            Поля констант
                            <M1M15/>
                        </Col>
                    </Row>
                    <Divider type="horizontal" className="divider-horizontal"
                             style={{width: "100%", backgroundColor: "#000", margin: "0px"}}/>
                    <Row justify="center">
                        <Col>
                            Переходы и условия переходов
                            <M2M3M4/>
                        </Col>
                        <Divider type="vertical" style={{height: "400px", backgroundColor: "#000"}}/>
                        <Col>
                            Операции над данными
                            <M7M8M9M10/>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    })
;
export default RowSettings;