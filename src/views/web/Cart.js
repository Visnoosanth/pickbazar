import React, {useState} from 'react'
import { Drawer, Button } from 'antd';
import { Card, Col, Row } from 'antd';
import Add from './Add';

import 'antd/dist/antd.css';

import apple from '../../assets/images/apple.jpg'
import babyspinach from '../../assets/images/babyspinach.jpg'
import blueberry from '../../assets/images/blueberry.jpeg'
import orange from '../../assets/images/orange.jpg'
import potato from '../../assets/images/potato.jpg'
import sweetcorn from '../../assets/images/sweetcorn.jpg'
import { AppleFilled } from '@ant-design/icons';

// const Cart = () => {
//   const [visible, setVisible] = useState(false);

//   const showDrawer = () => {
//     setVisible(true);
//   };

//   const onClose = () => {
//     setVisible(false);
//   };



    

function Cart() {
  const [grocerry, setGrocerry]=useState([])
  return (
    <div>
      
      {/* <div style={{marginBottom:16}}>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      </div>
      <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer> */}
   
    <div className="site-card-wrapper">
    <Row gutter={16}>
      
      <Col span={6}>
        <Card onClick={()=>
        setGrocerry("apple")}>
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

  </div>
  
  </div>
  )
}

export default Cart

// import React from "react";
// import { TiArrowBack } from "react-icons/ti";
// import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// const Cart = () => {
//   const cart = useSelector((state) => state);
//   console.log(cart);
//   const dispatch = useDispatch();
//   const addition = (acc, currentvalue) => {
//     return acc + currentvalue.price * currentvalue.quantity;
//   };
//   const total = cart.reduce(addition, 0);
//   return (
//     <div className="cartcontainer">
//       <Link to="/">
//         <TiArrowBack />
//       </Link>
//       <div className="cart">
//         {cart.map((item) => {
//           return (
//             <div className="cartcad" key={item.id}>
//               <div>
//                 <img src={` ../images/${item.image}`} alt="cart" />
//                 <h4>{item.name}</h4>
//                 <p> price: ksh. {item.price}</p>
//                 <p>amount : ksh.{item.price * item.quantity}</p>
//                 <button
//                   onClick={() => dispatch({ type: "REMOVE", payload: item })}
//                 >
//                   remove
//                 </button>
//               </div>
//               <div>
//                 <button
//                   onClick={() => dispatch({ type: "INCREASE", payload: item })}
//                 >
//                   +
//                 </button>
//                 <p>{item.quantity}</p>
//                 <button
//                   onClick={() => {
//                     if (item.quantity > 1) {
//                       dispatch({ type: "DECREASE", payload: item });
//                     } else {
//                       dispatch({ type: "REMOVE", payload: item });
//                     }
//                   }}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       {total > 0 && <h2>total:{total}</h2>}
//     </div>
//   );
// };

// export default Cart;
