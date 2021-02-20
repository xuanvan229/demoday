/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Input, notification, Button, InputNumber, Select,
} from 'antd';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { post } from '../../services/api';

const addProjectAPI = (data, headersAuthen) => {
  const url = '/projects';
  return post({ url, data, headersAuthen });
};

const { Option } = Select;
const { TextArea } = Input;

const Dashboard = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [moneyPerCoPhan, setMoneyPerCoPhan] = useState('');
  const [min, setMin] = useState('');
  const [profit_time_type, setProfitTimeType] = useState('month');
  const [profit_time, setProfitTime] = useState(1);
  const [cophan, setCophan] = useState(1);
  const [loinhuan, setLoiNhuan] = useState(1);
  const [withdraw_time, setWithdrawTime] = useState(1);
  const isLogin = useSelector((state) => state.login.isLogin);
  const token = useSelector((state) => state.login.accessToken);

  const onMoneyChange = (value) => {
    setMoneyPerCoPhan(value.floatValue);
  };

  const onCoPhanChange = (value) => {
    setCophan(value);
  };

  const onAddItem = async () => {
    if (min > cophan) {
      notification.error({
        message: 'Số lượng cổ phần đầu tư tối thiểu không được lớn hơn tổng số cổ phần',
      });
      return;
    }
    const data = {
      title,
      link,
      description,
      total_shares: cophan,
      share_price: moneyPerCoPhan,
      minimum_share: min,
      profit: loinhuan,
      profit_time,
      profit_time_type,
      withdraw_time,
    };
    try {
      const result = await addProjectAPI(data, token);
      if (result.status === 201) {
        notification.success({
          message: 'Đăng bài thành công',
        });
      }
    } catch (err) {
      notification.error({
        message: 'Đăng bài thất bại vui lòng kiểm tra lại',
      });
    }
  };

  return (
  <div className="flex flex-col max-w-1000 w-full bg-gray-100 shadow-lg rounded-md flex-1 p-10">
    <div className="list-add">
      <div className="item-add">
        <div className="flex flex-col w-3/4">
          <label className="text-lg">Tên sản phẩm </label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 w-full mt-2 shadow-md rounded-md" />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Link </label>
          <Input value={link} onChange={(e) => setLink(e.target.value)} className="p-2 w-full mt-2 shadow-md rounded-md" />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Mô tả</label>
          <TextArea defaultValue={description} onChange={(e) => setDescription(e.target.value)} className="w-full mt-2" autoSize={{ minRows: 3, maxRows: 7 }} />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Số tiền cho một cổ phần(VND) </label>
          <NumberFormat value={moneyPerCoPhan} onValueChange={onMoneyChange} className="p-2 border w-full mt-2 shadow-md rounded-md" thousandSeparator={true} suffix={' VND'} />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Tổng số lượng cổ phần </label>
          <InputNumber value={cophan} onChange={(value) => onCoPhanChange(value)} className="p-1 border w-full mt-2 shadow-md rounded-md"/>
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Số lượng cổ phần đầu tư tối thiểu </label>
          <InputNumber value={min} onChange={(value) => setMin(value)} className="p-1 border w-full mt-2 shadow-md rounded-md" />
        </div>
        <div className="flex flex-row mt-6 items-end">
            <div className="flex flex-col w-3/4">
              <label className="text-lg">Lợi nhuận (%)</label>
              <InputNumber value={loinhuan} onChange={(value) => setLoiNhuan(value)} className="p-1 border w-full mt-2 shadow-md rounded-md"/>
            </div>
        </div>
        <div className="flex flex-row mt-6 items-end">
          <div className="flex flex-col w-2/4 pr-4">
              <label className="text-lg"> Số thời gian </label>
              <InputNumber value={profit_time} onChange={(value) => setProfitTime(value)} className="p-1 border w-full mt-2 shadow-md rounded-md"/>
            </div>
            <div className="w-1/4 flex flex-col">
            <label className="text-lg">Chu kì</label>
              <Select defaultValue={profit_time_type} onChange={(value) => setProfitTimeType(value)} className="shadow-md" style={{ width: '100%' }} size="large">
                <Option value="month">Tháng</Option>
                <Option value="year">Năm</Option>
              </Select>
            </div>
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Thời gian rút vốn (tháng)</label>
          <InputNumber value={withdraw_time} onChange={(value) => setWithdrawTime(value)} className="p-1 w-full mt-2 rounded-md text-gray-700 shadow-md" />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <Button type="primary" onClick={onAddItem}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
