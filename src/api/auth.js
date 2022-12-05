import { json } from "react-router-dom"

export const setAuthToken = user => {
    const currentUser = {
        email: user.email
    }
    //sava user in db and get token
    fetch(`${process.env.REACT_APP_apiUrl}/users/${currentUser.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            //save token in localStorage
            localStorage.setItem('token', data.token)
        })
}