import {observer} from "mobx-react";
import {Form, Input, Select} from "antd";
import React from "react";


const M5M6 = observer(({values}) => {

    return <>
        <Form.Item
            name="m5"
            label="M5">
            <Input defaultValue={values.m5} ></Input>
        </Form.Item>
        <Form.Item
            name="m6"
            label="M6">
            <Input defaultValue={values.m6} ></Input>
        </Form.Item>
    </>
});
export default M5M6;