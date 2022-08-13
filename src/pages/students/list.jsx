import { Space, Table, Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { stuGet } from '../../api/stu'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '分数',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: '城市',
    dataIndex: 'city',
    key: 'city',
  },
  {
    title: '生日',
    key: 'time',
    dataIndex: 'time',
  },
  {
    title: '操作',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button type='primary' size='small'>编辑</Button>
        <Button type='danger' size='small'>删除</Button>
      </Space>
    ),
  },
];

export default function StuList() {
  const [data, setData] = useState([])

  useEffect(() => {
    stuGet().then(res => {
      console.log(res);
      if (res.code === 200) {
        setData(res.data)
      }
    })
  }, [])

  return (
    <Table columns={columns} dataSource={data} />
  )
}
