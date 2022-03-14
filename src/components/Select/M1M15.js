import {observer} from "mobx-react";
import {Form, Input, Select} from "antd";
import React from "react";


const M1M15 = observer(({values}) => {

    return <>
        <Form.Item
            name="m1"
            label="M1"
        >
            <Input defaultValue={values.m1} pattern="^[ 0-7]+$"></Input>
        </Form.Item>
        <Form.Item
            name="m15"
            label="M15"
        >
            <Input defaultValue={values.m15}></Input>
        </Form.Item>
    </>
});
export default M1M15;