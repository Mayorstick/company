import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import logp from './images/logp.png'
import { HiArrowDownOnSquareStack } from "react-icons/hi2";
import { getAuth, signOut } from "firebase/auth";
import { app } from '../FirebaseConfig';
import {toast} from 'react-toastify'

import {useNavigate} from 'react-router-dom'


const { Header, Sider, Content } = Layout;
const DefaultLayout = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate=useNavigate();


  const logout=()=>{
    const auth = getAuth(app);
    signOut(auth).then(() => {
      // Sign-out successful.
      localStorage.removeItem("user")
      navigate('/login')
      toast.success("sucessfully logout")
    }).catch((error) => {
      // An error happened.
    });
  }
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}
      
        style={{
          height:"100vh",
          position:"sticky",
          top:0,
          bottom:0,
          overflow:"auto"
      }}
        
      >
        <img src={logp} alt='moyo'  height={100} 
        style={{
          marginLeft:"50px",
          marginTop:"5px"
        }}
        />
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Profile',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Deparment',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Library',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display:"flex",
            justifyContent:"space-between"
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <button onClick={logout} className='btn btn-danger mt-2 ' style={{paddingTop:0,}}><HiArrowDownOnSquareStack size={30} />Logout</button>
          
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
         {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;