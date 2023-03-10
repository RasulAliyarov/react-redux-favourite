import "./Costumers.css"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'antd';
import { Link } from 'react-router-dom'
import InternalMenu from 'antd/es/menu/menu';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../redux/store';
import DataTable from '../../components/Table/DataTable';
import { setData, loading } from '../../redux/dataSlice/dataSlice';
import { increment, favouriteData } from '../../redux/favouriteSlice/favouriteSlice';

const Costumers = () => {
    let dispatch = useDispatch()
    let value = useSelector((store) => store.data.value)
    let favourite = useSelector((store) => store.favourite.value)

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/customers").then((resp) => {
            dispatch(setData(resp.data))
        })
    }, [])

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
                        <Link key={record.id} to={`/detail/${record.id}`} className='button'>Detail</Link>
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
                        <Link key={record} onClick={() => {
                            dispatch(increment())
                            dispatch(favouriteData(record))
                        }} className='button button__fav'>Favourite</Link>
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
        <Table className='container' rowSelection={rowSelection} columns={columns} dataSource={value} />
    )













    // return (
    //     value.map(data => {
    //         return <DataTable key={data.id} value={data} />
    //     })
    // )
};
export default Costumers;