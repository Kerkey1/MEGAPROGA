import {observer} from "mobx-react";
import {Col, Form, Input, Select, Row} from "antd";
import React from "react";


const M11 = observer(({EResultM11}) => {

    const row3M11 = <Row className="rowM11">
        <Col>3.-</Col>
        <Col>F->B</Col>
        <Col>-</Col>
        <Col>-</Col>
        <Col>F</Col>
    </Row>

    return <>
        <Form.Item
            name="m11"
            label="M11"
        >
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
            <Row>
                <Select>
                    <Select.Option value={EResultM11.FQ}>
                        <Row className="rowM11">
                            <Col>0.-</Col>
                            <Col>-</Col>
                            <Col>-</Col>
                            <Col>-</Col>
                            <Col>F</Col>
                        </Row>
                    </Select.Option>
                    <Select.Option value={EResultM11.NOP}>
                        <Row className="rowM11">
                            <Col>1.-</Col>
                            <Col>-</Col>
                            <Col>-</Col>
                            <Col>-</Col>
                            <Col>F</Col>
                        </Row>
                    </Select.Option>
                    <Select.Option value={EResultM11.FBA}>
                        <Row className="rowM11">
                            <Col>2.-</Col>
                            <Col>F->B</Col>
                            <Col>-</Col>
                            <Col>-</Col>
                            <Col>A</Col>
                        </Row>
                    </Select.Option>
                    <Select.Option value={EResultM11.FBF}>
                        {row3M11}
                    </Select.Option>
                    <Select.Option value={EResultM11.RSH_FBQ}>
                        <Row className="rowM11">
                            <Col>4.--></Col>
                            <Col>F/2->B</Col>
                            <Col>--></Col>
                            <Col>Q/2->Q</Col>
                            <Col>F</Col>
                        </Row>
                    </Select.Option>
                    <Select.Option value={EResultM11.RSH_FB}>
                        <Row className="rowM11">
                            <Col>5.--></Col>
                            <Col>F/2->B</Col>
                            <Col>-</Col>
                            <Col>-</Col>
                            <Col>F</Col>
                        </Row>
                    </Select.Option>
                    <Select.Option value={EResultM11.LSH_BFQ}>
                        <Row className="rowM11">
                            <Col>{"6.<--"}</Col>
                            <Col>2*F->B</Col>
                            <Col>{"<--"}</Col>
                            <Col>2*Q->Q</Col>
                            <Col>F</Col>
                        </Row>
                    </Select.Option>
                    <Select.Option value={EResultM11.LSH_BF}>
                        <Row className="rowM11">
                            <Col>{"7.<--"}</Col>
                            <Col>2*F->B</Col>
                            <Col>-</Col>
                            <Col>-</Col>
                            <Col>F</Col>
                        </Row>
                    </Select.Option>
                </Select>
            </Row>
        </Form.Item>
    </>
});
export default M11;