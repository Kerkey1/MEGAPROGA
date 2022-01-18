import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {Button, Table} from 'antd';
import Command from "../Logic/Command";

const TableComponent = observer(({setRowSettingsVisible, setCurRow,dataSource,columns, addRow}) => {




    return <>
        <Button onClick={addRow}>
            Add a row
        </Button>

        <Table
            pagination={false}
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