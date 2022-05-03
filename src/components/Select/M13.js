import {observer} from "mobx-react";
import {Form, Input, Select} from "antd";
import React from "react";


const M13 = observer(({EPswM13}) => {

    return <>
        <Form.Item
            name="m13"
            label="M13"
        >
            <Select style={{width: 300}}>
                <Select.Option value={EPswM13.SAVE}>0.Сохранение PSW</Select.Option>
                <Select.Option value={EPswM13.LD_FROM_FLAGS}>1.Загрузка по признакам МПС
                    К1804ВС1</Select.Option>
                <Select.Option value={EPswM13.LD_WITH_SHIFT}>2.Загрузка с учётом сдвигов</Select.Option>
                <Select.Option value={EPswM13.LD_FROM_Y}>3.Загрузка с шины Y</Select.Option>
            </Select>
        </Form.Item>
    </>
});
export default M13;