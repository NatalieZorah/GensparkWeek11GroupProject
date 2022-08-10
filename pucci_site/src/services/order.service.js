import authHeader from './auth-header';
import axios from './axios';

class OrderService {

    ORDERS_URL = 'mongo/orders';
    API_URL = "http://localhost:8080/api/"


    getAllOrders() {
        return axios.get(
            this.API_URL + this.ORDERS_URL,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    };

    getOrderById(order_id) {
        const url = this.ORDERS_URL + '/' + order_id;

        return axios.get(
            url,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log("Order with id " + order_id + " not found");
            console.log(error);
        });
    };

    createOrder(purchase_list) {
        return axios.post(
            this.API_URL + this.ORDERS_URL,
            {
                purchase_list: purchase_list,
            },
            {
                headers: authHeader()
            } 
        ).then(function (response) {
            console.log(response)
            localStorage.removeItem("cart")
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }

    updateOrder(order) {
        return axios.put(
            this.PRODUCTS_URL,
            {
                headers: { 'Content-Type': 'application/json' },
                data:
                {
                    order_id: order.order_id,
                    purchase_list: order.purchase_list,
                    purchase_total: order.purchase_total
                }

            }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    };

    deleteOrderById(order_id) {
        const url = this.ORDERS_URL + '/' + order_id;

        return axios.delete(
            url,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log("Order with id " + order_id + " not found");
            console.log(error);
        });
    };
}

export default new OrderService();


// documentation found here: https://www.npmjs.com/package/axios