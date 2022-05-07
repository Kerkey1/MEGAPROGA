import {observer} from "mobx-react";
import {Form, Select} from "antd";
import React from "react";
import {EInputM12, EOutputM14} from "../../Consts/ConstM";


const M12M14 = observer(() => {


    return <>
        <Form.Item
            name="m12"
            label="M12"
        >
            <Select style={{width: 250}}>
                <Select.Option value={EInputM12.RDID}>0.RDI-->D;BI-->RDI</Select.Option>
                <Select.Option value={EInputM12.ZID}>1.ZI-->D</Select.Option>
                <Select.Option value={EInputM12.M1D}>2.M1-->D</Select.Option>
                <Select.Option value={EInputM12.PSWD}>3.PSW-->D</Select.Option>
                <Select.Option value={EInputM12.RDID_BIRDI}>4.RDI-->D;BI-->RDI</Select.Option>
                <Select.Option value={EInputM12.ZID_BIRDI}>5.ZI-->D;BI-->RDI</Select.Option>
                <Select.Option value={EInputM12.M1D_BIRDI}>6.M1-->D;BI-->RDI</Select.Option>
                <Select.Option
                    value={EInputM12.RDID_BIRDI_BIRK}>7.RDI-->D;BI-->RDI;BI-->RK</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item
            name="m14"
            label="M14"
        >
            <Select>
                <Select.Option value={EOutputM14.NONE}>0.null</Select.Option>
                <Select.Option value={EOutputM14.YRDO}>1.Y-->RDO</Select.Option>
                <Select.Option value={EOutputM14.YMAR}>2.Y-->MAR</Select.Option>
            </Select>
        </Form.Item>
    </>
});
export default M12M14;