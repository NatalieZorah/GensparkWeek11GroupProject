import axios from "axios";

class UserService {

    USERS_URL = 'http://localhost:8080/api/users';

    getAllUsers() {
        return axios.get(
            this.USERS_URL,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }

    getUserById(user_id) {
        const url = this.USERS_URL + '/' + user_id;

        return axios.get(
            url,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log("User with id " + user_id + " not found");
            console.log(error);
        });
    }

    createUser(sign_in_type, name, username, password, email, phone) {
        let payload = {
            sign_in_type,
            name,
            username,
            password,
            email,
            phone
        }
        console.log(payload)
        return axios.post(
            'http://localhost:8080/api/auth' + '/signup',
            {
                sign_in_type,
                name,
                username,
                password,
                email,
                phone
            }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }

    updateUser(user) {
        return axios.put(
            this.USERS_URL,
            {
                headers: { 'Content-Type': 'application/json' },
                data:
                {
                    user_id: user.user_id,
                    sign_in_type: user.sign_in_type,
                    name: user.name,
                    username: user.username,
                    password: user.password,
                    email: user.email,
                    phone: user.phone
                }
            }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log(error);
        });
    }

    deleteUserById(user_id) {
        const url = this.USERS_URL + '/' + user_id;

        return axios.delete(
            url,
            { headers: { 'Content-Type': 'application/json' } }
        ).then(function (response) {
            console.log(response)
            return response.data;
        }).catch(function (error) {
            console.log("User with id " + user_id + " not found");
            console.log(error);
        });
    }
}

export default new UserService();

// documentation found here: https://www.npmjs.com/package/axios