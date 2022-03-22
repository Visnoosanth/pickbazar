import React from 'react'
import Add from './Add';
import { Card, Col, Row } from 'antd';
import apple from '../../assets/images/apple.jpg'
import babyspinach from '../../assets/images/babyspinach.jpg'
import blueberry from '../../assets/images/blueberry.jpeg'
import orange from '../../assets/images/orange.jpg'
import potato from '../../assets/images/potato.jpg'
import sweetcorn from '../../assets/images/sweetcorn.jpg'


import { AppleFilled } from '@ant-design/icons';
function Cart() {
  return (
    <div><div className="site-card-wrapper">
    <Row gutter={16}>
      
      <Col span={6}>
        <Card >
          <img src={apple} alt="apple" />
          <Add />
        </Card>
      </Col>
      <Col span={6}>
        <Card>
        <img src={babyspinach} alt="babyspinach" />
        </Card>
      </Col>
      <Col span={6}>
        <Card >
        <img src={blueberry} alt="blueberry" />
        </Card>
      </Col>
      <Col span={6}>
        <Card >
        <img src={orange} alt="orange" />
        </Card>
      </Col>
    </Row>
    <Row gutter={16}>
      
      <Col span={6}>
        <Card >
          <img src={potato} alt="potato" />
        </Card>
      </Col>
      <Col span={6}>
        <Card >
        <img src={sweetcorn} alt="sweetcorn" />
        </Card>
      </Col>
      
    </Row>

  </div></div>
  )
}

export default Cart