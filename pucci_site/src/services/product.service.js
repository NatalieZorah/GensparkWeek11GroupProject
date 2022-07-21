import axios from './axios';

class ProductService {

    PRODUCTS_URL = '/products';

    getAllProducts = async () => {
        try {
            let response = await axios.get(
                this.PRODUCTS_URL
            )
            let responseData = await response.data;
            return responseData
        } catch (err) {
            console.log(err)
        }
    }

    getProductById(product_id) {
        const url = this.PRODUCTS_URL + '/' + product_id;
        return axios.get(
            url
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log("Product with id " + product_id + " not found");
            console.log(error);
        });
    }

    createProduct(product) {
        return axios
        .post(
            this.PRODUCTS_URL,
            product
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }

    updateProduct(product) {
        return axios.put(
            this.PRODUCTS_URL,
            product
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }

    deleteProductById(product_id) {
        const url = this.PRODUCTS_URL + '/' + product_id;

        return axios.delete(
            url
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log("Product with id " + product_id + " not found");
            console.log(error);
        });
    }
}

export default new ProductService();

// documentation found here: https://www.npmjs.com/package/axios