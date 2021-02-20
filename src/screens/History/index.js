/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import NumberFormat from 'react-number-format';

const Item = () => {
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
  <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4 mb-4">
      <Modal title="Đầu tư dự án số 1" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
        <div className="flex flex-col  w-full">
          <label className="text-lg">Số tiền đầu tư (VND) </label>
          <NumberFormat value={min} onValueChange={(value) => setMin(value.floatValue)} className="p-2 border w-full mt-2 border-gray-700 shadow-md rounded-md" thousandSeparator={true} suffix={' VND'} />
        </div>
        </div>
      </Modal>
  <div className=" border border-gray p-2 rounded shadow-md bg-white">
        <h1 className="text-lg font-bold text-green-500">
          Dự án số 1
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="mt-4">
          <div>
            <span className="font-bold">
              Tiền đầu tư
            </span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              100,000,000 VND
            </span>
          </div>
          <div>
            <span className="font-bold">
              Lãi suất
            </span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              20%
            </span>
          </div>
          <div>
            <span className="font-bold">
              Thời gian hoàn tiền
            </span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              20/12/2022
            </span>
          </div>
        </div>
      </div>
  </div>
  );
};

const List = () => {
  const [list, setList] = useState();
  return (
    <div className="flex flex-col w-full p-4">
      <div className="text-lg ml-4">
        Số tiền trong tài khoản: <span className="text-red-500 font-bold text-xl">1,000,000,000 VND</span>
      </div>
      <div className="flex flex-wrap w-full p-4">
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div>
    </div>

  );
};

export default List;
