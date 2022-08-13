import { Space, Table, Button, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { stuGet, stuDelete } from '../../api/stu'


export default function StuList() {
  const [data, setData] = useState([])

  const getData = () => {
    stuGet().then(res => {
      // console.log(res);
      if (res.code === 200) {
        setData(res.data)
      }
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const deleteData = (id) => {
    // console.log(id);
    stuDelete(id).then(res => {
      if (res.code === 200) {
        // console.log(res);
        getData()
        message.success(res.msg)
      }
    })
  }

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
          <Button type='danger' size='small' onClick={() => deleteData(record.key)}>删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <Table columns={columns} dataSource={data} />
  )
}
