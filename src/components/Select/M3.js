import React from "react";
import {observer} from "mobx-react";
import {Select} from "antd";

const M3 = observer(({ECondM3}) => {

    return<>
        <Select>
            <Select.Option value={ECondM3.PSW0}>0.PSW[0]</Select.Option>
            <Select.Option value={ECondM3.PSW1}>1.PSW[1]</Select.Option>
            <Select.Option value={ECondM3.PSW2}>2.PSW[2]</Select.Option>
            <Select.Option value={ECondM3.PSW3}>3.PSW[3]</Select.Option>
            <Select.Option value={ECondM3.PSW4}>4.PSW[4]</Select.Option>
            <Select.Option value={ECondM3.PSW5}>5.PSW[5]</Select.Option>
            <Select.Option value={ECondM3.CT}>6.Перенос СТ</Select.Option>
            <Select.Option value={ECondM3.CONSTZ}>7.Константа 0</Select.Option>
            <Select.Option value={ECondM3.FLG0}>8.FLG[0]</Select.Option>
            <Select.Option value={ECondM3.FLG1}>9.FLG[1]</Select.Option>
            <Select.Option value={ECondM3.FLG2}>10.FLG[2]</Select.Option>
            <Select.Option value={ECondM3.FLG3}>11.FLG[3]</Select.Option>
            <Select.Option value={ECondM3.FLG4}>12.FLG[4]</Select.Option>
            <Select.Option value={ECondM3.FLG5}>13.FLG[5]</Select.Option>
            <Select.Option value={ECondM3.FLG6}>14.FLG[6]</Select.Option>
            <Select.Option value={ECondM3.FLG7}>15.FLG[7]</Select.Option>
        </Select>
    </>
});
export default M3;