/**
 *
 * Navbar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, Row, Col, Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key="1">ع</Menu.Item>
  </Menu>
);
const Navbar = () => (
  <Header>
    <Row>
      <Col xs={2} md={2}>
        <div className="logo" />
      </Col>
      <Col>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <FormattedMessage {...messages.nav_link_1} />
          </Menu.Item>
          <Menu.Item key="2">
            <FormattedMessage {...messages.nav_link_2} />
          </Menu.Item>
          <Menu.Item key="3">
            <FormattedMessage {...messages.nav_link_3} />
          </Menu.Item>
          <Menu.Item key="4">
            <FormattedMessage {...messages.nav_link_4} />
          </Menu.Item>
          <Menu.Item key="5">
            <FormattedMessage {...messages.nav_link_5} />
          </Menu.Item>
          <Menu.Item key="6">
            <FormattedMessage {...messages.nav_link_6} />
          </Menu.Item>
        </Menu>
      </Col>
      <Col>
        <Button>التسجيل</Button>
        <Button type="primary">الدخول</Button>
        <Dropdown overlay={menu}>
          <Button>
            ع <DownOutlined />
          </Button>
        </Dropdown>
      </Col>
    </Row>
  </Header>
);

Navbar.propTypes = {};

export default Navbar;
