import {observer} from "mobx-react";
import {Form, Input} from "antd";
import React from "react";


const M1M15 = observer(() => {

    return <>
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
    </>
});
export default M1M15;