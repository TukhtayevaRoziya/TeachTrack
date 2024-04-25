import React from 'react';
import { Table } from 'antd';

const MyTable = () => {
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
                {
                    text: 'ADC',
                    value: 'ADC',
                },
                {
                    text: 'Korean Friend',
                    value: 'Korean Friend',
                },
                {
                    text: 'English Life',
                    value: 'English Life',
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
            width: '15%',

        },
        {
            title: 'Vaqt',
            dataIndex: 'time',
            filters: [
                {
                    text: '08:00',
                    value: '08:00',
                },
                {
                    text: '09:00',
                    value: '09:00',
                },
                {
                    text: '10:00',
                    value: '10:00',
                },
                {
                    text: '12:00',
                    value: '12:00',
                },
                {
                    text: '13:00',
                    value: '13:00',
                },
                {
                    text: '14:00',
                    value: '14:00',
                },
                {
                    text: '15:00',
                    value: '15:00',
                },
                {
                    text: '16:00',
                    value: '16:00',
                },
            ],
            onFilter: (value, record) => record.time.startsWith(value),
            filterSearch: true,
            width: '15%',
            // ...getColumnSearchProps('time')
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
                {
                    text: 'Kiymo',
                    value: 'Kimyo',
                },
                {
                    text: 'Biologiya',
                    value: 'Biologiya',
                },
                {
                    text: 'Rus tili',
                    value: 'Rus tili',
                },
                {
                    text: 'Koreys tili',
                    value: 'Koreys tili',
                },
                {
                    text: 'Ingliz tili',
                    value: 'Ingliz tili',
                },
                {
                    text: 'Ona tili',
                    value: 'Ona tili',
                },
            ],
            onFilter: (value, record) => record.subject.startsWith(value),
            filterSearch: true,
            width: '17%',
        },
        {
            title: 'Dars kunlari',
            dataIndex: 'days',
            filters: [
                {
                    text: 'Du-Chor-Ju',
                    value: 'Du-Chor-Ju',
                },
                {
                    text: 'Se-Pa-Sha',
                    value: 'Se-Pa-Sha',
                },
            ],
            onFilter: (value, record) => record.days.startsWith(value),
            filterSearch: true,
            width: '20%',
        },
        {
            title: 'Yosh',
            dataIndex: 'age',
            filters: [
                {
                    text: '5-10',
                    value: '5-10',
                },
                {
                    text: '11-15',
                    value: '11-15',
                },
                {
                    text: '16+',
                    value: '16+',
                }
            ],
            onFilter: (value, record) => record.age.startsWith(value),
            filterSearch: true,
            width: '10%',
        },
    ];
    const data = [
        {
            id: 1,
            name: 'Result',
            price: 350000,
            time: '12:00',
            subject: 'Fizika',
            link: '/result',
            days: 'Du-Chor-Ju',
            age: '16+'

        },
        {
            id: 2,
            name: 'Fiz-mat',
            price: 400000,
            time: '13:00',

            subject: 'Fizika',
            link: '/fiz_mat',
            days: 'Se-Pa-Sha',
            age: '11-15'

        },
        {
            id: 3,
            name: 'Wester',
            price: 300000,
            time: '09:00',

            subject: 'Matematika',
            link: '/wester',
            days: 'Du-Chor-Ju',
            age: '5-10'

        },
        {
            id: 4,
            name: 'InStudy',
            price: 250000,
            time: '10:00',
            subject: 'Biologiya',
            link: '/instudy',
            days: 'Du-Chor-Ju',
            age: '16+'

        },
        {
            id: 5,
            name: 'Result',
            price: 550000,
            time: '10:00',
            subject: 'Kimyo',
            link: '/instudy',
            days: 'Se-Pa-Sha',
            age: '16+'

        },
        {
            id: 6,
            name: 'InStudy',
            price: 450000,
            time: '08:00',
            subject: 'Ingliz tili',
            link: '/instudy',
            days: 'Se-Pa-Sha',
            age: '11-15'

        },
        {
            id: 7,
            name: 'Result',
            price: 550000,
            time: '15:00',
            subject: 'Kimyo',
            link: '/instudy',
            days: 'Se-Pa-Sha',
            age: '16+'

        },
        {
            id: 8,
            name: 'ADC',
            price: 350000,
            time: '14:00',
            subject: 'Ingliz tili',
            link: '/instudy',
            days: 'Du-Chor-Ju',
            age: '5-10'

        },
        {
            id: 9,
            name: 'Result',
            price: 150000,
            time: '09:00',
            subject: 'Ona tili',
            link: '/instudy',
            days: 'Se-Pa-Sha',
            age: '16+'

        },
        {
            id: 10,
            name: 'Korean Friend',
            price: 450000,
            time: '09:00',
            subject: 'Koreys tili',
            link: '/instudy',
            days: 'Du-Chor-Ju',
            age: '16+'

        },
        {
            id: 11,
            name: 'ADC',
            price: 200000,
            time: '16:00',
            subject: 'Rus tili',
            link: '/instudy',
            days: 'Se-Pa-Sha',
            age: '5-10'
        },
        {
            id: 12,
            name: 'English Life',
            price: 350000,
            time: '08:00',
            subject: 'Ingliz tili',
            link: '/instudy',
            days: 'Du-Chor-Ju',
            age: '11-15'
        },
        {
            id: 13,
            name: 'Fiz-mat',
            price: 400000,
            time: '13:00',

            subject: 'Matematika',
            link: '/fiz_mat',
            days: 'Se-Pa-Sha',
            age: '11-15'
        },
        {
            id: 14,
            name: 'Wester',
            price: 200000,
            time: '14:00',
            subject: 'Biologiya',
            link: '/instudy',
            days: 'Du-Chor-Ju',
            age: '16+'
        },
        {
            id: 15,
            name: 'English Life',
            price: 300000,
            time: '14:00',
            subject: 'Rus tili',
            link: '/instudy',
            days: 'Du-Chor-Ju',
            age: '5-10'
        },
        {
            id: 16,
            name: 'English Life',
            price: 400000,
            time: '08:00',

            subject: 'Matematika',
            link: '/wester',
            days: 'Du-Chor-Ju',
            age: '16+'

        },
        {
            id: 17,
            name: 'ADC',
            price: 200000,
            time: '10:00',

            subject: 'Matematika',
            link: '/wester',
            days: 'Se-Pa-Sha',
            age: '11-15'

        },
        {
            id: 18,
            name: 'InStudy',
            price: 450000,
            time: '12:00',
            subject: 'Matematika',
            link: '/instudy',
            days: 'Du-Chor-Ju',
            age: '16+'

        },
        {
            id: 19,
            name: 'Result',
            price: 250000,
            time: '14:00',
            subject: 'Matematika',
            link: '/instudy',
            days: 'Du-Chor-Ju',
            age: '5-10'

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
            <Table pagination={{ pageSize: 7 }} columns={columns} dataSource={data} onChange={onChange}/>

        </>
    )
}

export default MyTable;