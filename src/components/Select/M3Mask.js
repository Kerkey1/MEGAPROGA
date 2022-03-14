import React from "react";
import {observer} from "mobx-react";
import {Select} from "antd";

const M3Mask = observer(({ECondM3}) => {

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
            <Select.Option value={ECondM3.LV1}>10. УР1</Select.Option>
            <Select.Option value={ECondM3.LV21}>11. УР2.1</Select.Option>
            <Select.Option value={ECondM3.LV22}>12. УР2.2</Select.Option>
            <Select.Option value={ECondM3.LV3}>13. УР3</Select.Option>
            <Select.Option value={ECondM3.LV4}>14. УР4</Select.Option>
            <Select.Option value={ECondM3.LV5}>15. УР5</Select.Option>
            <Select.Option value={ECondM3.RK119}>16. RK[11/9]=0</Select.Option>
            <Select.Option value={ECondM3.RK53}>17. RK[5/3]=0</Select.Option>
        </Select>
    </>
});
export default M3Mask;