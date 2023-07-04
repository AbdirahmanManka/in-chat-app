import React from 'react'
import { DatePicker, Space } from 'antd';

const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

function R1() {
  return (
    <div>
        <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>
        

      
    </div>
  )
}

export default R1
