/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../../store/actions_type/login';
import { get } from '../../services/api';

const getUserAPI = (id) => {
  const url = `/users/${id}`;
  return get({ url });
};

const Header = ({ title }) => {
  const user_id = useSelector((state) => state.login.user_id);
  const [item, setItem] = React.useState(null);

  const dispatch = useDispatch();

  React.useEffect(() => {
    getData();
    return () => {};
  }, []);

  const getData = async () => {
    try {
      const result = await getUserAPI(user_id);
      if (result.status === 200) {
        setItem(result.data);
      }
    } catch (e) {}
  };

  return (
    <nav className="flex shadow-sm bg-white border-gray-400 flex-row items-center justify-between px-4 py-4 border-b">
      <div className="text-2xl tracking-wider font-medium">{title}</div>
      <div className="flex items-center">
        <div className="mr-4 font-bold">{item && item.username}</div>
        <button onClick={() => dispatch({ type: LOGOUT })} className="btn">
          <LogoutOutlined className="text-lg" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
