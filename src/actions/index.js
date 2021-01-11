import axios from 'axios';

// Action creator
export const login = (email, password) => async dispatch => {
    // Return an action

    try {
        const res = await axios.post(`http://localhost:8080/login`, {
            email,
            password
        });
        const user = res.data;
        localStorage.setItem('user', JSON.stringify(user));
        dispatch({ type: 'login', payload: user })
    } catch (err) {
        console.error(err.message);
        // dispatch({ type: 'login', payload: null })
    }

}

export const logout = () => async dispatch => {
    try {
        localStorage.removeItem('user');
        dispatch({ type: 'logout', payload: null });
    } catch (err) {
        console.error(err.message);
    }
}