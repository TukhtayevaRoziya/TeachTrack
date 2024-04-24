import React from 'react'
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Mentions,
    Select,
    TreeSelect,
} from 'antd';
import img from '../../assets/regis/resgis.png'

import style from './Registration.module.css'

const Registration = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <>

            <div className={style.body}>

                <h1 className={style.title}>Kursga yozilish</h1>
                <div className={style.block}>
                <Form
    name="basic"
    style={{
        maxWidth: 600,
      }}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="O'quvchi ismi"
      name="username"
      rules={[
        {
          required: true,
          message: 'Iltimos O\'quvchi ismni kirgizing!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="O'quvchi yoshi"
      name="age"
      rules={[
        {
          required: true,
          message: 'Iltimos O\'quvchi yoshini kirgizing!',
        },
      ]}
    >
      <InputNumber />
    </Form.Item>
    <Form.Item
      label="Ota-onasining Ismi"
      name="parents"
      rules={[
        {
          required: true,
          message: 'Iltimos O\'quvchi ota-onasining ismini kirgizing!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Telefon raqam"
      name="tel"
      rules={[
        {
          required: true,
          message: 'Iltimos Telefon raqam kirgizing!',
        },
      ]}
    >
      <InputNumber />
    </Form.Item>

  

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
                </div>
                {/* <img src={img} alt="" /> */}
            </div>
        </>
    )
}

export default Registration
