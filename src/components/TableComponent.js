import React from 'react';
import {observer} from "mobx-react";
import {Table} from 'antd';

const TableComponent = observer(({
                                     setRowSettingsVisible,
                                     setCurRow,
                                     dataSource,
                                     data,
                                     form,
                                     Rom,
                                     z,
                                     checkCommands,
                                     setRowContextVisible,
                                     setRowIndex
                                 }) => {

    const columns = [
        {
            title: 'Адрес микрокоманды',
            dataIndex: 'address',
            width: '35%',
            render: e => e.toString(8)
        },
        {
            title: 'Команда',
            dataIndex: 'command',
            width: '65%',
            render: e => Rom[e].Parse()
        }
    ];

    return <>
        <Table
            bordered
            scroll={{y: 800}}
            pagination={false}
            dataSource={dataSource}
            columns={columns}
            rowClassName={(record, index) => {
                if (data) {
                    if (z > 0) {
                        let cur = (record.address === data[z - 1].CMK ? "green-color" : "");
                        let next = (record.address === data[z].CMK ? "yellow-color" : "");
                        return [cur, next]
                    } else
                        return (record.address === data[z].CMK && record.address !== 0 ? "yellow-color" : "")
                }
            }}
            onRow={(record, rowIndex) => {
                return {
                    onDoubleClick: event => {
                        if (record.key > 0) {
                            setCurRow(parseInt(record.address, 10));
                            if (checkCommands[record.address] === undefined) {
                                form.setFieldsValue({
                                    m1: 0,
                                    m2: 0,
                                    m3: 0,
                                    m4: 14,
                                    m5: 0,
                                    m6: 0,
                                    m7: 0,
                                    m8: 0,
                                    m9: 7,
                                    m10: 0,
                                    m11: 3,
                                    m12: 0,
                                    m13: 0,
                                    m14: 2,
                                    m15: 0
                                })
                            } else {
                                form.setFieldsValue({
                                    m1: Rom[record.address].fields[0].toString(8),
                                    m2: Rom[record.address].fields[1],
                                    m3: Rom[record.address].fields[2],
                                    m4: Rom[record.address].fields[3],
                                    m5: Rom[record.address].fields[4].toString(2),
                                    m6: Rom[record.address].fields[5].toString(2),
                                    m7: Rom[record.address].fields[6],
                                    m8: Rom[record.address].fields[7],
                                    m9: Rom[record.address].fields[8],
                                    m10: Rom[record.address].fields[9],
                                    m11: Rom[record.address].fields[10],
                                    m12: Rom[record.address].fields[11],
                                    m13: Rom[record.address].fields[12],
                                    m14: Rom[record.address].fields[13],
                                    m15: Rom[record.address].fields[14].toString(8)
                                })
                            }
                            setRowSettingsVisible(true);
                            console.log(Rom)
                        }
                    },
                    onContextMenu: event => {
                        if (record.key > 0) {
                            event.preventDefault()
                            setRowIndex(parseInt(record.key, 10))
                            setCurRow(parseInt(record.address, 10));
                            setRowContextVisible(true)
                        }
                    },
                };
            }}
        />
    </>
});
export default TableComponent;