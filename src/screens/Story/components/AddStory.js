import React from 'react';
import { Input, DatePicker, Button } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
// import Header from '../../../components/Header';
// import NavBar from '../../../components/NavBar';

// import styles from './AddStory.module.scss'; // Import css modules stylesheet as styles

const { TextArea } = Input;

const AddStory = () => (
  <div className="flex flex-col max-w-1000 w-full bg-gray-100 shadow-lg rounded-md flex-1 p-10">
    <div className="list-add">
      <div className="item-add">
        <div className="flex flex-col w-3/4">
          <label className="text-lg">Title </label>
          <Input className="w-full mt-2 border-gray-700 shadow-md rounded-md" />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Location </label>
          <Input className="w-full mt-2 border-gray-700 shadow-md rounded-md" />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Time</label>
          <DatePicker className="w-full mt-2 rounded-md border-gray-700 text-gray-700 shadow-md" />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Image</label>
          <div className="w-full mt-2 flex flex-wrap">
            <div className="w-1/3 px-1 image-add">
              <Button
                type="danger"
                className="btn-close"
                shape="circle"
                icon={<CloseOutlined />}
              />
              <img
                className="w-full mb-2 rounded-md shadow-lg border border-gray-700"
                src="https://images.unsplash.com/photo-1601758004484-733647916908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              />
            </div>
            <div className="w-1/3 px-1 image-add">
              <Button
                type="danger"
                className="btn-close"
                shape="circle"
                icon={<CloseOutlined />}
              />
              <img
                className="mb-2 rounded-md shadow-lg border-gray-700 border"
                src="https://images.unsplash.com/photo-1551380081-a868e17414b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
              />
            </div>
            <div className="w-1/3 px-1 image-add">
              <Button
                type="danger"
                className="btn-close"
                shape="circle"
                icon={<CloseOutlined />}
              />
              <img
                className="w-full mb-2 rounded-md shadow-lg border-gray-700 border"
                src="https://images.unsplash.com/photo-1601758004484-733647916908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              />
            </div>
            <div className="w-1/3 px-1 image-add">
              <Button
                type="danger"
                className="btn-close"
                shape="circle"
                icon={<CloseOutlined />}
              />
              <img
                className="mb-2 rounded-md shadow-lg border-gray-700 border"
                src="https://images.unsplash.com/photo-1551380081-a868e17414b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
              />
            </div>
            <div className="w-1/3 px-1 image-add">
              <Button
                type="danger"
                className="btn-close"
                shape="circle"
                icon={<CloseOutlined />}
              />
              <img
                className="w-full mb-2 rounded-md shadow-lg border-gray-700 border"
                src="https://images.unsplash.com/photo-1601758004484-733647916908?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              />
            </div>
            <div className="w-1/3 px-1 image-add">
              <Button
                type="danger"
                className="btn-close"
                shape="circle"
                icon={<CloseOutlined />}
              />
              <img
                className="mb-2 rounded-md shadow-lg border-gray-700 border"
                src="https://images.unsplash.com/photo-1606005645167-918170eb1fc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80"
              />
            </div>
            <div className="flex cursor-pointer flex-col justify-center items-center shadow-md w-full h-20 border border-gray-700 rounded-md mt-4 bg-white">
              <PlusOutlined className="text-lg" />
              <lable>Add image</lable>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label className="text-lg">Content</label>
          <TextArea className="w-full mt-2" autoSize={{ minRows: 3, maxRows: 7 }} />
        </div>
      </div>
      <div className="item-add">
        <div className="flex flex-col w-3/4">
          <label>Title </label>
          <Input className="w-full mt-2" />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label>Time</label>
          <DatePicker className="w-full mt-2" />
        </div>
        <div className="flex flex-col w-3/4 mt-6">
          <label>Content</label>
          <TextArea className="w-full mt-2" />
        </div>
      </div>
    </div>
  </div>
);

export default AddStory;
