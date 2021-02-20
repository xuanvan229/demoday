import React from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../store/actions_type/login';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <nav className="flex shadow-sm border-gray-400 flex-row items-center justify-between px-4 py-4 border-b">
        <div className='text-2xl tracking-wider font-medium'>Dashboard</div>
        <button onClick={ () => dispatch({ type: LOGOUT })} className="btn">
          <LogoutOutlined className='text-lg' />
        </button>
      </nav>
  );
};

export default Header;
