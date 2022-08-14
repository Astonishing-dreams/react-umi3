import { Space, Table, Button, message } from 'antd';
import React, { useState, useEffect } from 'react';
import { stuGet, stuDelete } from '../../api/stu'


export default function StuList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = () => {
    stuGet().then(res => {
      console.log(res.results);
      setData(res.results)
      // 关闭loading
      setLoading(false)
    })
  }

  useEffect(() => {
    // 获取数据
    getData()
  }, [])

  const deleteData = (id) => {
    // console.log(id);
    stuDelete(id).then(res => {
      if (res.code === 200) {
        // console.log(res, 111);
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
          <Button type='danger' size='small' onClick={() => deleteData(record.objectId)}>删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <Table loading={loading} columns={columns} dataSource={data} rowKey='objectId' />
  )
}
