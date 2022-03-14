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
                                     setValues,
                                     value
                                 }) => {

    function isStyledDifferently(rowObject, index) {
        return rowObject.isActive ? true : false;
    }

    return <>
        <Button onClick={addRow}>
            Add a row
        </Button>

        <Table
            pagination={false}
            dataSource={dataSource}
            columns={columns}
            rowHighlightTest={isStyledDifferently}
            onRow={(record, rowIndex) => {
                return {
                    onDoubleClick: event => {
                        setCurRow(parseInt(record.address, 10));
                        setValues(command[record.address]);
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