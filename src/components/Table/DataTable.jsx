import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom'
import InternalMenu from 'antd/es/menu/menu';

const DataTable = (value) => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'companyName',
        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName',
        },
        {
            title: 'Contact Title',
            dataIndex: 'contactTitle',
        },
        {
            title: 'Detail',
            render: (record) => {
                return (
                    <>
                        {/* <Link to={`/detail/${""}`} className='button'>Detail</Link> */}
                    </>
                )
            },
        },
        {
            title: 'Add to favourite',
            render: (record) => {
                return (
                    <>
                        {/* <button onClick={() => deleteItem(record)}>Favourite</button> */}
                        <Link to="/favourites" className='button button__fav'>Favourite</Link>
                    </>
                )
            },
        },
    ];

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };
    const rowSelection = {
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: (changableRowKeys) => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((_, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    setSelectedRowKeys(newSelectedRowKeys);
                },
            },
        ],
    };
    return (
        <Table className='container' rowSelection={rowSelection} columns={columns} dataSource={value.value} />
    )
};
export default DataTable;








// const deleteItem = (record) => {

    //     console.log(record.key)
    //     setDelets(prevData => {
    //         let some = prevData.filter(product => product.key !== record.key)
    //         console.log(some)
    //         return some
    //     })
    // }