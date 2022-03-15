import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {Button, Table} from 'antd';

const TableComponent = observer(({
                                     setRowSettingsVisible,
                                     setCurRow,
                                     dataSource,
                                     columns,
                                     addRow,
                                     command,
                                     value,
                                     data,
                                     z
                                 }) => {

    return <>
        <Table
            pagination={false}
            dataSource={dataSource}
            columns={columns}
            rowClassName={(record, index) => {
                if (z > 0) {
                    let cur=(record.address === data[z - 1].CMK ? "green-color" : "");
                    let next= (record.address === data[z].CMK ? "yellow-color" : "");
                    return [cur,next]
                }
                else
                return (record.address === data[z].CMK && record.address !== 0 ? "yellow-color" : "")
            }}
            onRow={(record, rowIndex) => {
                return {
                    onDoubleClick: event => {
                        setCurRow(parseInt(record.address, 10));
                        value = command[record.address];
                        console.log(value);
                        setRowSettingsVisible(true);
                    },
                };
            }}
        />
    </>
});
export default TableComponent;