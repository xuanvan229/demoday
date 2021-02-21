/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import NumberFormat from 'react-number-format';
import { NavLink } from 'react-router-dom';
import { get } from '../../services/api';
import Header from '../../components/Header';

const getProjectAPI = (data, headersAuthen) => {
  const url = '/projects';
  return get({ url });
};
const Item = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [min, setMin] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <NavLink
      to={`/dashboard/detail/${item.id}`}
      className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4 mb-4"
    >
      <Modal
        title="Đầu tư dự án số 1"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <div className="flex flex-col  w-full">
            <label className="text-lg">Số tiền đầu tư (VND) </label>
            <NumberFormat
              value={min}
              onValueChange={(value) => setMin(value.floatValue)}
              className="p-2 border w-full mt-2 border-gray-700 shadow-md rounded-md"
              thousandSeparator={true}
              suffix={' VND'}
            />
          </div>
        </div>
      </Modal>
      <div className=" border border-gray p-2 rounded shadow-md bg-white">
        <h1 className="text-lg font-bold text-green-500">{item.title}</h1>
        <p className="text-black">{item.description}</p>
        <div className="mt-4">
          <div>
            <span className="font-bold text-black">người tạo</span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              {item.username}
            </span>
          </div>
          <div>
            <span className="font-bold text-black">Số cổ phần</span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              {item.total_shares}
            </span>
          </div>
          <div>
            <span className="font-bold text-black">Số cổ phần tối thiểu</span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              {item.minimum_share}
            </span>
          </div>
          <div>
            <span className="font-bold text-black">Định giá cổ phần</span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              {item.share_price}
            </span>
          </div>
          <div>
            <span className="font-bold text-black">Lãi suất</span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              {item.profit}%
            </span>
          </div>
          <div>
            <span className="font-bold text-black">Thời gian hoàn tiền</span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              {item.withdraw_time} tháng
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

const List = () => {
  const [list, setList] = useState([]);
  React.useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const result = await getProjectAPI();
      if (result.status === 200) {
        setList(result.data);
      }
    } catch (e) {}
  };
  return (
    <div>
      <Header title="Các dự án đang gọi vốn" />
      <div className="flex flex-wrap w-full p-4">
        {list.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
