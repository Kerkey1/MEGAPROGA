import React, {useState} from 'react';
import {observer} from "mobx-react";
import {Input, Modal, Radio} from "antd";
import Command from "../Logic/Command";

const ContextMenu = observer(({
                                  visible,
                                  setVisible,
                                  curRow,
                                  dataSource,
                                  setDataSource,
                                  checkCommands,
                                  rom,
                                  rowIndex
                              }) => {

        const [value, setValue] = useState(1);
        const [addressInputVisible, setAddressInputVisible] = useState(true)
        const [newReg, setNewReg] = useState()
        const onChange = e => {
            setValue(e.target.value)
            if (e.target.value === 1) {
                setAddressInputVisible(true)
            }
            if (e.target.value === 2) {
                setAddressInputVisible(false)
            }
        }

        const regChange = (event) => {
            setNewReg(parseInt(event.target.value, 8))
        }

        const onOk = () => {
            if (!addressInputVisible)
                DeleteRow()
            if (addressInputVisible)
                editRow()
            setVisible(false)
        }


        const onCancel = () => {
            setVisible(false)
        }

        const DeleteRow = () => {
            Modal.confirm({
                title: "Уверены что хотите удалить?",
                okText: "Да",
                cancelText: "Нет",
                okType: "danger",
                onOk: () => {
                    setDataSource((pre) => {
                        return pre.filter((reg) => reg.address !== curRow);
                    });
                    checkCommands[curRow] = undefined
                    rom[curRow] = new Command(0)

                },
            });
        };

        const editRow = () => {
            let exist = -1;
            for (let i = 0; i < dataSource.length; i++) {
                if (dataSource[i].address === newReg) {
                    exist = dataSource[i].address
                }
            }
            if (exist === -1) {
                let updateCommand = {
                    key: rowIndex,
                    address: newReg,
                    command: newReg,
                }
                checkCommands[newReg] = true
                rom[newReg] = rom[curRow]
                rom[curRow] = new Command(0)
                checkCommands[curRow] = undefined
                setDataSource((pre) => {
                    return pre.map((v) => {
                        if (v.key === rowIndex) {
                            return updateCommand;
                        } else {
                            return v;
                        }
                    });
                });

            }
        }

        return <Modal
            okText="Сохранить"
            cancelText="Отмена"
            visible={visible}
            onCancel={onCancel}
            onOk={onOk}
        >
            <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Изменить</Radio>
                <Radio value={2}>Удалить</Radio>
            </Radio.Group>
            {addressInputVisible &&
            <Input onChange={regChange}/>}
        </Modal>
    }
)
export default ContextMenu