import React from 'react'
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import messages from './messages';
import { Layout, Menu, Breadcrumb,Row,Col,Button,Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Header from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./Layout.scss"
const {  Content } = Layout;

const HomeLayout = ({ children }) => {
  return (
    <Layout className="layout">
      <Header/>
        
      <Content >
        {children}
      </Content>
      <Footer />
    </Layout>
  )
}

HomeLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default HomeLayout
