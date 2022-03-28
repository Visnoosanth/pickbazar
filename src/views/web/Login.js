import React from 'react';
//import '../../../dist/output.css';
import '../../assets/input.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { AppleOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Title from './Title';
import Cart from './Cart';



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Login = () => {
  return (

<Layout>
    {/* <Header className="header" 
    style={{
      positon:"fixed",
      width:"100%",
    }}>
    
     
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
      <Title />
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header> */}
    
    <Layout>
      
      <Sider
      //  width={200} className="site-layout-background"
      //collapsible
      //collapsed={collapsed}
      //trigger={null}
      //breakpoint='lg'
      style={{
        height:"100vh",
        overflow:"hidden",
      }}
       >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<AppleOutlined />} title="Fruits & Vegetables">
            <Menu.Item key="1">Fruits</Menu.Item>
            <Menu.Item key="2">Vegetables</Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub2" icon={<AppleOutlined />} title="Meat & Fish">
            <Menu.Item key="3">Chiken</Menu.Item>
            <Menu.Item key="4">Fish</Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub3" icon={<AppleOutlined />} title="Snacks">
            <Menu.Item key="5">Chocolate</Menu.Item>
            <Menu.Item key="6">Crisp</Menu.Item>
            <Menu.Item key="7">Sauce</Menu.Item>
            <Menu.Item key="8">Soup</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<AppleOutlined />} title="Pet care">
            <Menu.Item key="9">Cat Food</Menu.Item>
            <Menu.Item key="10">Dog Food</Menu.Item>
            <Menu.Item key="11">accessories</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<AppleOutlined />} title="Diary">
            <Menu.Item key="12">Milk</Menu.Item>
            <Menu.Item key="13">Butter</Menu.Item>
            <Menu.Item key="14">Egg</Menu.Item>
            <Menu.Item key="15">Yogurt</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
         
          <Cart />
        </Content>
      </Layout>
    </Layout>
  </Layout>



  )
}

export default Login;


