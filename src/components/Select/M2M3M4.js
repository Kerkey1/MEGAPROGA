import {observer} from "mobx-react";
import {Form, Select} from "antd";
import React, {useState} from "react";
import {
    ECondM3,
    EInvMaskM2,
    EJumpM4,
} from "../../Consts/ConstM";

const M2M3M4 = observer(() => {

    const [isMasked, setMasked] = useState(false)

    const checkMask = (e) => {
        if (e === 0 || e === 1) {
            setMasked(false)
        } else {
            setMasked(true)
        }
    }

    return <>
        <Form.Item
            name="m2"
            label="M2"
        >
            <Select style={{width: 500}} onChange={checkMask}>
                <Select.Option value={EInvMaskM2.NNOT}>0. Нет инверсии условия</Select.Option>
                <Select.Option value={EInvMaskM2.NOT}>1. Инверсия условия</Select.Option>
                <Select.Option value={EInvMaskM2.NNOT_MASK}>2. Нет инварсии условия(маска)</Select.Option>
                <Select.Option value={EInvMaskM2.NOT_MASK}>3. Инверсия условия(маска)</Select.Option>
            </Select>
        </Form.Item>
        {isMasked ? <Form.Item
            name="m3"
            label="M3"
        >
            <Select>
                <Select.Option value={ECondM3.PSW0}>0.PSW[0]</Select.Option>
                <Select.Option value={ECondM3.PSW1}>1.PSW[1]</Select.Option>
                <Select.Option value={ECondM3.PSW2}>2.PSW[2]</Select.Option>
                <Select.Option value={ECondM3.PSW3}>3.PSW[3]</Select.Option>
                <Select.Option value={ECondM3.PSW4}>4.PSW[4]</Select.Option>
                <Select.Option value={ECondM3.PSW5}>5.PSW[5]</Select.Option>
                <Select.Option value={ECondM3.CT}>6.Перенос СТ</Select.Option>
                <Select.Option value={ECondM3.CONSTZ}>7.Константа 0</Select.Option>
                <Select.Option value={ECondM3.LV1}>8.УР.1</Select.Option>
                <Select.Option value={ECondM3.LV21}>9.УР2.1</Select.Option>
                <Select.Option value={ECondM3.LV22}>10.УР2.2</Select.Option>
                <Select.Option value={ECondM3.LV3}>11.УР3</Select.Option>
                <Select.Option value={ECondM3.LV4}>12.УР4</Select.Option>
                <Select.Option value={ECondM3.LV5}>13.УР5</Select.Option>
                <Select.Option value={ECondM3.RK119}>14.RK[11/9]=0</Select.Option>
                <Select.Option value={ECondM3.RK53}>15.RK[5/3]=0</Select.Option>
            </Select>
        </Form.Item> : <Form.Item
            name="m3"
            label="M3"
        >
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
        </Form.Item>}

        <Form.Item
            name="m4"
            label="M4"
        >
            <Select>
                <Select.Option value={EJumpM4.JZ}>0.Перейти на нулевой адрес(JZ)</Select.Option>
                <Select.Option value={EJumpM4.CJS}>1.Условный переход к подпрограмме по адресу из RMK
                    (CJS)</Select.Option>
                <Select.Option value={EJumpM4.JMAP}>2.Переход по адресу из старшего байта RK
                    (JMAP)</Select.Option>
                <Select.Option value={EJumpM4.CJP}>3.Условный переход по адресу из RMK
                    (CJP)</Select.Option>
                <Select.Option value={EJumpM4.PUSH}>4.Загрузка стэка и условная загрузка счётчика СТ
                    (PUSH)</Select.Option>
                <Select.Option value={EJumpM4.JSRP}>5.Условный переход на адрес из RA или из RMK
                    (JSRP)</Select.Option>
                <Select.Option value={EJumpM4.CJV}>6.Условный переход по адресу из младшего байта RK
                    (CJV)</Select.Option>
                <Select.Option value={EJumpM4.JRP}>7.Условный переход на адресс из RA или из RMK
                    (JRP)</Select.Option>
                <Select.Option value={EJumpM4.RFCT}>8.Повторение цикла, если счётчик не равен нулю
                    (RFCT)</Select.Option>
                <Select.Option value={EJumpM4.RPCT}>9.Повторение по адресу из RMK, если счётчик не равен
                    нулю (RPCT)</Select.Option>
                <Select.Option value={EJumpM4.CRTN}>10.Условный возврат из подпрограммы
                    (CRTN)</Select.Option>
                <Select.Option value={EJumpM4.CJPP}>11.Условный переход по адресу из RMK и приём из стека
                    (CJPP)</Select.Option>
                <Select.Option value={EJumpM4.LDCT}>12.Загрузка счётчика и последовательная выборка
                    (LDCT)</Select.Option>
                <Select.Option value={EJumpM4.LOOP}>13.Проверка условия и окончания цикла
                    (LOOP)</Select.Option>
                <Select.Option value={EJumpM4.CONT}>14.Последовательная выборка (CONT)</Select.Option>
                <Select.Option value={EJumpM4.JP}>15.Переход по адресу, выбираемому из RMK
                    (JP)</Select.Option>

            </Select>
        </Form.Item>
    </>
});
export default M2M3M4;