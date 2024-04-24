import React, { useRef, useState } from 'react';
import { Button, Input, Space, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { redirect } from "react-router-dom";


const MyTable = () => {

    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef();

    const handleSearch = (
        confirm,
        dataIndex,
    ) => {
        confirm();
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />

                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
            }
        },

        render: (text) =>
            searchedColumn === dataIndex ? (

                <div>  {text ? text.toString() : ''}</div>
            ) : (
                text
            )


    });

    const columns = [
        {
            title: 'Nomi',
            dataIndex: 'name',
            filters: [
                {
                    text: 'Result',
                    value: 'Result',
                },
                {
                    text: 'Fiz-mat',
                    value: 'Fiz-mat',
                },
                {
                    text: 'Wester',
                    value: 'Wester',
                },
                {
                    text: 'InStudy',
                    value: 'InStudy',
                },
            ],
            filterSearch: true,
            onFilter: (value, record) => record.name.includes(value),
            width: '20%',
            render: text => <a href={"#/" + text}>{text}</a>
        },
        {
            title: 'Narxi',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
        },
        {
            title: 'Vaqt',
            dataIndex: 'time',
            ...getColumnSearchProps('time')
        },
        {
            title: 'Fan',
            dataIndex: 'subject',
            filters: [
                {
                    text: 'Matematika',
                    value: 'Matematika',
                },
                {
                    text: 'Fizika',
                    value: 'Fizika',
                },
            ],
            onFilter: (value, record) => record.subject.startsWith(value),
            filterSearch: true,
            width: '20%',
        },
    ];
    const data = [
        {
            id: 1,
            name: 'Result',
            price: 350000,
            time: '12:00',
            subject: 'Fizika',
            link: '/result'
        },
        {
            id: 2,
            name: 'Fiz-mat',
            price: 400000,
            time: '13:00',

            subject: 'Fizika',
            link: '/fiz_mat'

        },
        {
            id: 3,
            name: 'Wester',
            price: 300000,
            time: '13:00',

            subject: 'Matematika',
            link: '/wester'

        },
        {
            id: 4,
            name: 'InStudy',
            price: 250000,
            time: '14:00',

            subject: 'Matematika',
            link: '/instudy'

        },
    ];
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>
                O'quv kurslar
            </h1>
            <Table columns={columns} dataSource={data} onChange={onChange}
                onRow={(record) => {
                    return {
                        onClick: () => {
                            redirect("/login");
                        },
                        //   ()
                    };
                }}

            />

        </>
    )
}

export default MyTable;