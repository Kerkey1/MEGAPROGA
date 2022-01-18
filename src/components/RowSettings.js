import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import {Col, Divider, Form, Input, Modal, Row, Select} from "antd";
import Command from "../Logic/Command";


const RowSettings = observer(({
                                  rowSettingsVisible,
                                  setRowSettingsVisible,
                                  commandArray,
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
                                  dataSource
                              }) => {

    const [form] = Form.useForm();

    const onCancel = (() => {
        setRowSettingsVisible(false);
    });

    const onOk = (() => {
        let data = form.getFieldsValue();
        data.reg = parseInt(data.reg, 10);
        data.m1 = parseInt(data.m1, 10);
        data.m5 = parseInt(data.m5, 10);
        data.m6 = parseInt(data.m6, 10);
        data.m15 = parseInt(data.m15, 10);

        Rom[curRow].SetFields(data);

        console.log(Rom);
        console.log(Rom[0].Parse(curRow));
        // string = mainRom[curRow].Parse();
        // test = string;
        // console.log(test);
        setRowSettingsVisible(false);
    });


    return <>
        <Modal
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
                        <Form.Item
                            name="m12"
                            label="M12"
                        >
                            <Select style={{width: 250}}>
                                <Select.Option value={EInputM12.RDID}>RDI-->D;BI-->RDI</Select.Option>
                                <Select.Option value={EInputM12.ZID}>ZI-->D</Select.Option>
                                <Select.Option value={EInputM12.M1D}>M1-->D</Select.Option>
                                <Select.Option value={EInputM12.PSWD}>PSW-->D</Select.Option>
                                <Select.Option value={EInputM12.RDID_BIRDI}>RDI-->D;BI-->RDI</Select.Option>
                                <Select.Option value={EInputM12.ZID_BIRDI}>ZI-->D;BI-->RDI</Select.Option>
                                <Select.Option value={EInputM12.M1D_BIRDI}>M1-->D;BI-->RDI</Select.Option>
                                <Select.Option
                                    value={EInputM12.RDID_BIRDI_BIRK}>RDI-->D;BI-->RDI;BI-->RK</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="m14"
                            label="M14"
                        >
                            <Select>
                                <Select.Option value={EOutputM14.NONE}>null</Select.Option>
                                <Select.Option value={EOutputM14.YRDO}>Y-->RDO</Select.Option>
                                <Select.Option value={EOutputM14.YMAR}>Y-->MAR</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                    <Col>
                        Мультиплексоры адреса
                        <Form.Item
                            name="m5"
                            label="M5">
                            <Input></Input>
                        </Form.Item>
                        <Form.Item
                            name="m6"
                            label="M6">
                            <Input></Input>
                        </Form.Item>
                    </Col>

                    <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                    <Col>
                        Приёмник результата
                        <Form.Item
                            name="m11"
                            label="M11"
                        >
                            {/*Исправить*/}
                            <Select>
                                <Select.Option value={EResultM11.FQ}>-</Select.Option>
                                <Select.Option value={EResultM11.NOP}>-</Select.Option>
                                <Select.Option value={EResultM11.FBA}>F->B</Select.Option>
                                <Select.Option value={EResultM11.FBF}>F->B</Select.Option>
                                <Select.Option value={EResultM11.RSH_FBQ}>F/2->B</Select.Option>
                                <Select.Option value={EResultM11.RSH_FB}>F/2->B</Select.Option>
                                <Select.Option value={EResultM11.LSH_BFQ}>2*F->B</Select.Option>
                                <Select.Option value={EResultM11.LSH_BF}>2*F->B</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                    <Col>
                        Формирование PSW
                        <Form.Item
                            name="m13"
                            label="M13"
                        >
                            <Select style={{width: 300}}>
                                <Select.Option value={EPswM13.SAVE}>Сохранение PSW</Select.Option>
                                <Select.Option value={EPswM13.LD_FROM_FLAGS}>Загрузка по признакам МПС
                                    К1804ВС1</Select.Option>
                                <Select.Option value={EPswM13.LD_WITH_SHIFT}>Загрузка с учётом сдвигов</Select.Option>
                                <Select.Option value={EPswM13.LD_FROM_Y}>Загрузка с шины Y</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Divider type="vertical" style={{height: "200px", backgroundColor: "#000"}}/>
                    <Col>
                        Поля констант
                        <Form.Item
                            name="m1"
                            label="M1"
                        >
                            <Input pattern="^[ 0-7]+$"></Input>
                        </Form.Item>
                        <Form.Item
                            name="m15"
                            label="M15"
                        >
                            <Input></Input>
                        </Form.Item>
                    </Col>
                </Row>
                <Divider type="horizontal" style={{width: "100vw", backgroundColor: "#000"}}/>
                <Row justify="center">
                    <Col>
                        Переходы и условия переходов
                        <Form.Item
                            name="m2"
                            label="M2"
                        >
                            <Select style={{width: 500}}>
                                <Select.Option value={EInvMaskM2.NNOT}>Нет инверсии условия</Select.Option>
                                <Select.Option value={EInvMaskM2.NOT}>Инверсия условия</Select.Option>
                                <Select.Option value={EInvMaskM2.NNOT_MASK}>Нет инварсии условия(маска)</Select.Option>
                                <Select.Option value={EInvMaskM2.NOT_MASK}>Инверсия условия(маска)</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="m3"
                            label="M3"
                        >
                            <Select>
                                <Select.Option value={ECondM3.PSW0}>PSW[0]</Select.Option>
                                <Select.Option value={ECondM3.PSW1}>PSW[1]</Select.Option>
                                <Select.Option value={ECondM3.PSW2}>PSW[2]</Select.Option>
                                <Select.Option value={ECondM3.PSW3}>PSW[3]</Select.Option>
                                <Select.Option value={ECondM3.PSW4}>PSW[4]</Select.Option>
                                <Select.Option value={ECondM3.PSW5}>PSW[5]</Select.Option>
                                <Select.Option value={ECondM3.CT}>Перенос СТ</Select.Option>
                                <Select.Option value={ECondM3.CONSTZ}>Константа 0</Select.Option>
                                <Select.Option value={ECondM3.FLG0}>FLG[0]</Select.Option>
                                <Select.Option value={ECondM3.FLG1}>FLG[1]</Select.Option>
                                <Select.Option value={ECondM3.FLG2}>FLG[2]</Select.Option>
                                <Select.Option value={ECondM3.FLG3}>FLG[3]</Select.Option>
                                <Select.Option value={ECondM3.FLG4}>FLG[4]</Select.Option>
                                <Select.Option value={ECondM3.FLG5}>FLG[5]</Select.Option>
                                <Select.Option value={ECondM3.FLG6}>FLG[6]</Select.Option>
                                <Select.Option value={ECondM3.FLG7}>FLG[7]</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="m4"
                            label="M4"
                        >
                            <Select>
                                <Select.Option value={EJumpM4.JZ}>Перейти на нулевой адрес(JZ)</Select.Option>
                                <Select.Option value={EJumpM4.CJS}>Условный переход к подпрограмме по адресу из RMK
                                    (CJS)</Select.Option>
                                <Select.Option value={EJumpM4.JMAP}>Переход по адресу из старшего байта RK
                                    (JMAP)</Select.Option>
                                <Select.Option value={EJumpM4.CJP}>Условный переход по адресу из RMK
                                    (CJP)</Select.Option>
                                <Select.Option value={EJumpM4.PUSH}>Загрузка стэка и условная загрузка счётчика СТ
                                    (PUSH)</Select.Option>
                                <Select.Option value={EJumpM4.JSRP}>Условный переход на адрес из RA или из RMK
                                    (JSRP)</Select.Option>
                                <Select.Option value={EJumpM4.CJV}>Условный переход по адресу из младшего байта RK
                                    (CJV)</Select.Option>
                                <Select.Option value={EJumpM4.JRP}>Условный переход на адресс из RA или из RMK
                                    (JRP)</Select.Option>
                                <Select.Option value={EJumpM4.RFCT}>Повторение цикла, если счётчик не равен нулю
                                    (RFCT)</Select.Option>
                                <Select.Option value={EJumpM4.RPCT}>Повторение по адресу из RMK, если счётчик не равен
                                    нулю (RPCT)</Select.Option>
                                <Select.Option value={EJumpM4.CRTN}>Условный возврат из подпрограммы
                                    (CRTN)</Select.Option>
                                <Select.Option value={EJumpM4.CJPP}>Условный переход по адресу из RMK и приём из стека
                                    (CJPP)</Select.Option>
                                <Select.Option value={EJumpM4.LDCT}>Загрузка счётчика и последовательная выборка
                                    (LDCT)</Select.Option>
                                <Select.Option value={EJumpM4.LOOP}>Проверка условия и окончания цикла
                                    (LOOP)</Select.Option>
                                <Select.Option value={EJumpM4.CONT}>Последовательная выборка (CONT)</Select.Option>
                                <Select.Option value={EJumpM4.JP}>Переход по адресу, выбираемому из RMK
                                    (JP)</Select.Option>

                            </Select>
                        </Form.Item>
                    </Col>
                    <Divider type="vertical" style={{height: "100px", backgroundColor: "#000"}}/>
                    <Col>
                        Операции над данными
                        <Form.Item
                            name="m7"
                            label="M7"
                        >
                            <Select style={{width: 500}}>
                                <Select.Option
                                    value={EShiftControlM7.PSW0R0RQ0}>[PSW(0)]&lt;-[R]&lt;--'0',;&lt;--[RQ]&lt;--'0'</Select.Option>
                                <Select.Option
                                    value={EShiftControlM7.PSW0RRQ}>&lt;==[PSW(0)]&lt;--[R]&lt;==(цикл);&lt;--[RQ]&lt;--(цикл)</Select.Option>
                                <Select.Option
                                    value={EShiftControlM7.PSW0RRQ1}>[PSW(0)]&lt;--[R]&lt;--[RQ&lt;--'1'</Select.Option>
                                <Select.Option
                                    value={EShiftControlM7.PSW0RRQ0}>[PSW(0)]&lt;--[R]&lt;--[RQ&lt;--'0'</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="m8"
                            label="M8"
                        >
                            <Select>
                                <Select.Option value={ECarryM8._0}>'0'</Select.Option>
                                <Select.Option value={ECarryM8._1}>'1'</Select.Option>
                                <Select.Option value={ECarryM8.CARRY_TO_PSW}>PSW[0]</Select.Option>
                                <Select.Option value={ECarryM8.NCARRY_TO_PSW}>NOT PSW[0]</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="m9"
                            label="M9"
                        >
                            <Select>
                                <Select.Option value={EOperandsM9.AQ}>A::Q</Select.Option>
                                <Select.Option value={EOperandsM9.AB}>A::B</Select.Option>
                                <Select.Option value={EOperandsM9.ZQ}>0::Q</Select.Option>
                                <Select.Option value={EOperandsM9.ZB}>0::B</Select.Option>
                                <Select.Option value={EOperandsM9.ZA}>0::A</Select.Option>
                                <Select.Option value={EOperandsM9.DA}>D::A</Select.Option>
                                <Select.Option value={EOperandsM9.DQ}>D::Q</Select.Option>
                                <Select.Option value={EOperandsM9.DZ}>D::0</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="m10"
                            label="M10"
                        >
                            <Select>
                                <Select.Option value={EFuncM10.ADD}>R+S+C0</Select.Option>
                                <Select.Option value={EFuncM10.SUBS}>S-R-1+C0</Select.Option>
                                <Select.Option value={EFuncM10.SUBR}>R-S-1+C0</Select.Option>
                                <Select.Option value={EFuncM10.OR}>R v S</Select.Option>
                                <Select.Option value={EFuncM10.AND}>R & S</Select.Option>
                                <Select.Option value={EFuncM10.NRAND}>NOT(R) & S</Select.Option>
                                <Select.Option value={EFuncM10.XOR}>R [+] S</Select.Option>
                                <Select.Option value={EFuncM10.NRXOR}>NOT (R [+] S)</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    </>
});
export default RowSettings;