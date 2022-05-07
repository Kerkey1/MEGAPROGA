import {observer} from "mobx-react";
import {Form, Select} from "antd";
import React from "react";
import {ECarryM8, EFuncM10, EOperandsM9, EShiftControlM7} from "../../Consts/ConstM";


const M7M8M9M10 = observer(() => {

    return <>
        <Form.Item
            name="m7"
            label="M7"
        >
            <Select style={{width: 500}}>
                <Select.Option
                    value={EShiftControlM7.PSW0R0RQ0}>0.[PSW(0)]&lt;-[R]&lt;--'0',;&lt;--[RQ]&lt;--'0'</Select.Option>
                <Select.Option
                    value={EShiftControlM7.PSW0RRQ}>1.&lt;==[PSW(0)]&lt;--[R]&lt;==(цикл);&lt;--[RQ]&lt;--(цикл)</Select.Option>
                <Select.Option
                    value={EShiftControlM7.PSW0RRQ1}>2.[PSW(0)]&lt;--[R]&lt;--[RQ&lt;--'1'</Select.Option>
                <Select.Option
                    value={EShiftControlM7.PSW0RRQ0}>3.[PSW(0)]&lt;--[R]&lt;--[RQ&lt;--'0'</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="m8"
            label="M8"
        >
            <Select>
                <Select.Option value={ECarryM8._0}>0.'0'</Select.Option>
                <Select.Option value={ECarryM8._1}>1.'1'</Select.Option>
                <Select.Option value={ECarryM8.CARRY_TO_PSW}>2.PSW[0]</Select.Option>
                <Select.Option value={ECarryM8.NCARRY_TO_PSW}>3.NOT PSW[0]</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="m9"
            label="M9"
        >
            <Select>
                <Select.Option value={EOperandsM9.AQ}>0.A::Q</Select.Option>
                <Select.Option value={EOperandsM9.AB}>1.A::B</Select.Option>
                <Select.Option value={EOperandsM9.ZQ}>2.0::Q</Select.Option>
                <Select.Option value={EOperandsM9.ZB}>3.0::B</Select.Option>
                <Select.Option value={EOperandsM9.ZA}>4.0::A</Select.Option>
                <Select.Option value={EOperandsM9.DA}>5.D::A</Select.Option>
                <Select.Option value={EOperandsM9.DQ}>6.D::Q</Select.Option>
                <Select.Option value={EOperandsM9.DZ}>7.D::0</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="m10"
            label="M10"
        >
            <Select>
                <Select.Option value={EFuncM10.ADD}>0.R+S+C0</Select.Option>
                <Select.Option value={EFuncM10.SUBS}>1.S-R-1+C0</Select.Option>
                <Select.Option value={EFuncM10.SUBR}>2.R-S-1+C0</Select.Option>
                <Select.Option value={EFuncM10.OR}>3.R v S</Select.Option>
                <Select.Option value={EFuncM10.AND}>4.R & S</Select.Option>
                <Select.Option value={EFuncM10.NRAND}>5.NOT(R) & S</Select.Option>
                <Select.Option value={EFuncM10.XOR}>6.R [+] S</Select.Option>
                <Select.Option value={EFuncM10.NRXOR}>7.NOT (R [+] S)</Select.Option>
            </Select>
        </Form.Item>
    </>
});
export default M7M8M9M10;