import './App.css';
import React,{useState, useEffect} from 'react';
import Order_box from './order_box/Order_box';
import axios from 'axios';
function App() {
  const [dependence, changeDeps] = useState("all");
  const [orders, changeOrder] = useState([])
  const [checkTrigger, Checked] = useState(false);
  useEffect(() =>{
    axios.get('http://localhost:3000/order/get', {
      params: {status : dependence}
    })
    .then((response) => {
      console.log(response.data)
      changeOrder(response.data)
      // checkTrigger(false)
    })
    .catch((error) => {console.log(error)})
  }, [dependence, Checked])
  return (
    <div className="App">
      <h1>Orders</h1>
      <div className="workspace">
        <select className='dependency' onChange={(e) => {
          // changeDeps(e.target.value === )
          if (e.target.value === "done") changeDeps(true)
          else if (e.target.value === "waiting") changeDeps(false)
          else changeDeps("all")
          console.log(e.target.value)
        }}>
          <option value="all">Tất cả đơn</option>
          <option value="done">Đã duyệt</option>
          <option value="waiting">Chờ duyệt</option>
        </select>
        <div className='orders'>
          {orders.map((order) =><Order_box check={Checked} checkTrigger={checkTrigger} _id={order._id} name={order.name} phone={order.phone} address={order.address} gmail={order.gmail} status={order.status} order={order.order}></Order_box>)}
        </div>
      </div>
    </div>
  );
}

export default App;
