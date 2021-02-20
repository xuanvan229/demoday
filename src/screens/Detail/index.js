/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable no-shadow */
/* eslint-disable no-empty */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Button, Modal, Spin, Checkbox, notification,
} from 'antd';
import NumberFormat from 'react-number-format';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get, post } from '../../services/api';

const getProjectAPI = (id) => {
  const url = `/projects/${id}`;
  return get({ url });
};

const getProjectInvesterAPI = (id) => {
  const url = `/projects/${id}/investors`;
  return get({ url });
};

const dautuAPI = (data, headersAuthen) => {
  const url = '/project-invest';
  return post({ url, data, headersAuthen });
};

const List = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [min, setMin] = useState('');
  const [publish, setPublish] = useState(true);
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [investers, setInvester] = useState([]);
  const token = useSelector((state) => state.login.accessToken);
  const user_id = useSelector((state) => state.login.user_id);

  React.useEffect(() => {
    getData();
    getDataInvester();
  }, []);
  const getData = async () => {
    try {
      const result = await getProjectAPI(id);
      if (result.status === 200) {
        setItem(result.data);
      }
    } catch (e) {

    }
  };

  const getDataInvester = async () => {
    try {
      const result = await getProjectInvesterAPI(id);
      if (result.status === 200) {
        setInvester(result.data);
        // setItem(result.data);
      }
    } catch (e) {

    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    if (min < item.minimum_share) {
      notification.error({
        message: 'Không đủ số cổ phần tối thiểu',
      });
      return;
    } if (min > item.total_shares) {
      notification.error({
        message: 'Không vượt quá số tối đa',
      });
      return;
    }
    const data = {
      project_id: id,
      shares: min,
      publish,
    };
    try {
      const result = await dautuAPI(data, token);
      if (result.status === 201) {
        getDataInvester();
        props.setFetchWallet(!props.fetchWallet);
        notification.success({
          message: 'Đầu tư thành công',
        });
      }
    } catch (err) {
      console.log('err', { err });
      if (err && err.response) {
        notification.error({
          message: err && err.response.data.message,
        });
      } else {
        notification.error({
          message: 'Đầu tư thất bại vui lòng kiểm tra lại',
        });
      }
    }
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
    {item

      ? <div className="flex flex-wrap w-full p-4">
      <Modal title="Đầu tư dự án số 1" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <div className="flex flex-col  w-full">
            <label className="text-lg">Số cổ phần đầu tư </label>
            <NumberFormat value={min} onValueChange={(value) => setMin(value.floatValue)} className="p-2 border w-full mt-2 border-gray-700 shadow-md rounded-md" />
          </div>
          <div className="mt-4">
          <Checkbox checked={publish} onChange={(e) => setPublish(e.target.checked)}>Publish</Checkbox>
          </div>
        </div>
      </Modal>
      <div className="flex flex-col p-4 w-full md:w-2/3 pr-2">
      <div className="bg-white shadow-md rounded-md h-full p-2">
        <h1 className="text-xl font-bold text-green-500">
         {item.title}
        </h1>
        <p>
          {item.description}
        </p>
        <div className="mt-4">
          <div>
            <span className="font-bold text-black">
            Số cổ phần
            </span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              {item.total_shares}
            </span>
          </div>
          <div>
            <span className="font-bold text-black">
            Số cổ phần tối thiểu
            </span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              {item.minimum_share}
            </span>
          </div>
          <div>
            <span className="font-bold text-black">
              Định giá cổ phần
            </span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              <NumberFormat value={item.share_price} displayType={'text'} thousandSeparator={true} suffix={' VND'} renderText={(value) => <span>{value}</span>} />
            </span>
          </div>
          <div>
            <span className="font-bold text-black">
              Lãi suất
            </span>
            <span className="ml-2 text-lg font-bold text-blue-400">
            {item.profit}% trong {item.profit_time} {item.profit_time_type === 'month' ? 'Tháng' : 'Năm'}
            </span>
          </div>
          <div>
            <span className="font-bold text-black">
              Thời gian hoàn tiền
            </span>
            <span className="ml-2 text-lg font-bold text-blue-400">
              {item.withdraw_time} tháng
            </span>
          </div>
          {user_id !== item.ownerId && <Button className="mt-6" type="primary" onClick={showModal}>
          Đầu tư
        </Button>}
        </div>
        </div>
      </div>
      <div className="flex flex-col  p-4 w-full md:w-1/3">
        <div className="bg-white shadow-md rounded-md h-full p-2">
            <h2 className="text-lg font-bold ">
              Những người đầu tư
            </h2>
            <ul className="list-decimal pl-6  mt-6">
              {investers.map((invest) => (
                 <li key={invest.invested_at} className="mb-2">
                 <div className="font-bold text-base text-blue-500">
                   {invest.username}
                 </div>
                 <div>
                   {invest.shares} cổ phần
                 </div>
               </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
      : <Spin/>}
   </>
  );
};

export default List;
