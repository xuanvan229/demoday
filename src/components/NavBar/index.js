/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-empty */
import React, { useState } from 'react';
import { Button, Modal, notification } from 'antd';
import { MdDashboard } from 'react-icons/md';
import { CgNotes } from 'react-icons/cg';
import { AiOutlineSolution } from 'react-icons/ai';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import NumberFormat from 'react-number-format';
// import { FiTarget } from 'react-icons/fi';
// import { GiSandsOfTime } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import moment from 'moment';
import logo from '../../assets/images/logo.png';

import styles from './Navbar.module.scss';
import { get, post, put } from '../../services/api';

const getUserAPI = (id) => {
  const url = `/users/${id}`;
  return get({ url });
};

const getTimeAPI = () => {
  const url = '/time';
  return get({ url });
};

const updateBalances = (id, data, headersAuthen) => {
  const url = `/users/${id}`;
  return put({ url, data, headersAuthen });
};

const triggerEventAPI = () => {
  const url = '/project-invest/demo';
  return post({ url });
};

const NavBar = (props) => {
  const [item, setItem] = React.useState(null);
  const { history } = props;
  const user_id = useSelector((state) => state.login.user_id);
  const token = useSelector((state) => state.login.accessToken);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [min, setMin] = useState('');
  const [time, setTime] = useState('');

  React.useEffect(() => {
    const unlisten = history.listen(({ action, location }) => {
      // The current location changed.
      getData();
      getTime();
    });

    getData();
    getTime();
    return () => {
      unlisten();
    };
  }, []);

  React.useEffect(() => {
    getData();
    getTime();
  }, [props.fetchWallet]);

  const getData = async () => {
    try {
      const result = await getUserAPI(user_id);
      if (result.status === 200) {
        setItem(result.data);
        setMin(result.data.balances);
      }
    } catch (e) {

    }
  };

  const getTime = async () => {
    try {
      const result = await getTimeAPI();
      if (result.status === 200) {
        setTime(result.data.time);
      }
    } catch (e) {

    }
  };

  const handleOk = async () => {
    const data = {
      username: item.username,
      balances: min,
    };
    try {
      const result = await updateBalances(item.id, data, token);
      if (result.status === 200) {
        getData();
        notification.success({
          message: 'Thành công',
        });
      }
    } catch (err) {
      notification.error({
        message: 'Thất bại vui lòng kiểm tra lại',
      });
    }
    setIsModalVisible(false);
  };

  const trigerNextEvent = async () => {
    try {
      const result = await triggerEventAPI();
      if (result.status === 201) {
        getData();
        getTime();
        notification.success({
          message: 'Thành công',
        });
      }
    } catch (err) {
      notification.error({
        message: 'Thất bại vui lòng kiểm tra lại',
      });
    }
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  console.log("moment(moment().unix() + time).format('MM/DD/YYYY')", time);
  return (
  <div className={styles.navbar}>
    <Modal title="Thay đổi số dư" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <div className="flex flex-col  w-full">
            <label className="text-lg">Số tiền(VND) </label>
            <NumberFormat value={min} onValueChange={(value) => setMin(value.floatValue)} className="p-2 border w-full mt-2 border-gray-700 shadow-md rounded-md" thousandSeparator={true} suffix={' VND'} />
          </div>
          <div className="mt-4">
          </div>
        </div>
      </Modal>
    <div>
      <img className="w-16" src={logo} alt="logo" />
    </div>
    <div className="flex-1 flex-col flex">
      <div className="flex-1">
      <NavLink activeClassName="text-blue-500 font-bold" to="/dashboard/new" className="p-4 border-b border-blue-400 cursor-pointer flex flex-row items-center">
        <MdDashboard className="text-xl text-blue-400"/>
        <span className="ml-4 text-xl">
          Gọi vốn
        </span>
      </NavLink>

      <NavLink activeClassName="text-blue-500 font-bold" to="/dashboard/list" className="p-4 border-b border-blue-400 cursor-pointer flex flex-row items-center">
        <AiOutlineSolution className="text-xl text-blue-400"/>
        <span className="ml-4 text-xl">
          Duyệt
        </span>
      </NavLink>

      <NavLink activeClassName="text-blue-500 font-bold" to="/dashboard/project" className="p-4 border-b border-blue-400 cursor-pointer flex flex-row items-center">
        <CgNotes className="text-xl text-blue-400"/>
        <span className="ml-4 text-xl">
          Các dự án
        </span>
      </NavLink>
      </div>
      <div>
        Thời gian hiện tại {moment(Number(moment().format('x')) + time).format('DD/MM/YYYY')}
      </div>
      <Button type="primary" onClick={trigerNextEvent}>
          Trigger Next Event
        </Button>
      <div className="mt-4 flex items-center mb-2">
        <div className="flex flex-col flex-1">
          <div>
            Số tiền đang có
          </div>
        </div>
        <Button onClick={showModal}>
          Thay đổi
        </Button>
      </div>
      <div className="text-xl mb-10 text-blue-400">
          {
            item && <NumberFormat value={item.balances} displayType={'text'} thousandSeparator={true} suffix={' VND'} renderText={(value) => <span>{value}</span>} />
           }
          </div>
    </div>
    {/*  */}
  </div>
  );
};
export default withRouter(NavBar);
