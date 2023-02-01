const Order = require('../model/Order');

class OrderController{
    Send(req, res, next){
        // console.log(res.query);
        let new_order = new Order(req.query);
        new_order.save()
        .then(res.json({"status": "success"}))
        .catch(next);
    }
    async getOrder(req, res, next){
        if (req.query.status === "all"){
            const orders = await Order.find()
            res.json(orders);
            // console.log(orders)
        }
        else{
            let tmp = false
            if (req.query.status != 0) tmp = true
            // console.log(tmp)
            const orders = await Order.find({
                status : req.query.status
            });
            res.json(orders);
            // console.log(orders)
        }
        next()
    }

    checkItem(req, res, next){
        // deps: Order

        // const ress = Order.updateOne({_id: req.query.id}, {$set: {address: true}})
        
        res.json({status : "success"})
    }
}

module.exports = new OrderController;