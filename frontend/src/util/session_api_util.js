import axios from 'axios';
import jwt_decode from 'jwt-decode';

const $ = window.$

export const GET_ERRORS = 'GET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const CLEAR_ALL_ERRORS = 'CLEAR_ALL_ERRORS';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';


// axios sets default header
export const setAuthToken = token => {
    if (token) {

        //adds to every request
        axios.defaults.headers.common['Authorization'] = token;
    }
    else {
        // delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const registerUser = (userData, history) => dispatch => {
    axios

    .post('api/users/register', userData)
    .then(res => {

        //save to local Storage
        const {token} =  res.data;
       
        // set token to local storage
        localStorage.setItem('jwtToken', token);
       
        //set token to auth header
        setAuthToken(token);
        debugger
        //decode token to get user data
        const decoded = jwt_decode(token);

        //set current user
        dispatch(setCurrentUser(decoded));
    })
    
    .catch(err => 
        console.log(err)
        // dispatch({
        //     type: GET_ERRORS,
        //     payload: err.response.data
        //     })
        );
};

export const loginUser = userData => dispatch => {
    axios
        .post('/api/users/login', userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to ls
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
};

export const setCurrentUser = decoded => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload: decoded
    };
};
export const clearErrors = () => dispatch => {
   dispatch({
        type: CLEAR_ALL_ERRORS,
    });
};

export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests (obvious)
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};