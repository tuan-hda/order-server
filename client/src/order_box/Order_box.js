import React from "react"
import axios from "axios"
function Order_box({check, name, address, phone, gmail, status, order, _id, checkTrigger}) {
    return(
    <div className="Order_box">
        <p>{name}</p>
        <p>{address}</p>
        <p>{phone}</p>
        <p>{gmail}</p>
        <p id="status">{status}</p>
        <div className="orders_container">
            {order.map((item) => <p>{item}</p>)}
        </div>
        <button className="check-button" onClick={()=>{
            axios.get('http://localhost:3000/order/checked',{
                params: {
                    id:_id,
                    order:{        
                        name: name,
                        address: address,
                        phone: phone,
                        gmail: gmail,  
                        status: status,
                        order:  order
                    },
                }})
            .then((response) => {
                check(!checkTrigger)
                console.log(response.data)
            })
            .catch((error) => {console.log(error)});
            console.log(_id)
        }}>checked</button>
    </div>)
}
export default Order_box