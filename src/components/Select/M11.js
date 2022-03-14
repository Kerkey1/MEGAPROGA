import {observer} from "mobx-react";
import {Form, Input, Select} from "antd";
import React from "react";


const M11 = observer(({EResultM11,values}) => {

    return <>
        <Form.Item
            name="m11"
            label="M11"
        >
            <Select defaultValue={values.m11}>
                <Select.Option value={EResultM11.FQ}>0.-</Select.Option>
                <Select.Option value={EResultM11.NOP}>1.-</Select.Option>
                <Select.Option value={EResultM11.FBA}>2.F->B</Select.Option>
                <Select.Option value={EResultM11.FBF}>3.F->B</Select.Option>
                <Select.Option value={EResultM11.RSH_FBQ}>4.F/2->B</Select.Option>
                <Select.Option value={EResultM11.RSH_FB}>5.F/2->B</Select.Option>
                <Select.Option value={EResultM11.LSH_BFQ}>6.2*F->B</Select.Option>
                <Select.Option value={EResultM11.LSH_BF}>7.2*F->B</Select.Option>
            </Select>
        </Form.Item>
    </>
});
export default M11;