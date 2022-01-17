import React, {useEffect} from 'react';
import {observer} from "mobx-react";
import { Table} from 'antd';
import Command from "../Logic/Command";

const TableComponent = observer(({setRowSettingsVisible, setCurRow, curRow, Rom,dataSource}) => {

    const columns = [
        {
            title: 'Address',
            dataIndex: 'address',
            width: '40%',
        },
        {
            title: 'Command',
            dataIndex: 'command',
            width: '40%',
        }
    ];


    return <>
        <Table
            dataSource={dataSource}
            columns={columns}
            onRow={(record, rowIndex) => {
                return {
                    onDoubleClick: event => {
                        setCurRow(parseInt(record.address, 10));
                        setRowSettingsVisible(true);
                    },
                };
            }}
        />
    </>
});
export default TableComponent;