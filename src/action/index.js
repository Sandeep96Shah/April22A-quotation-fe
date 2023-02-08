import { USERDETAILS, QUOTATIONS } from "./types";
import { getFormBody } from '../helper/utils';
import { getApis } from '../helper/apis';

export function createUser({name, email, password, confirmPassword}){
        const url = getApis.createUser();
        fetch(url,{
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }, 
            body: getFormBody({name, email, password, confirmPassword}),
        })
        .then(async (response) => {
            const data = await response.json();
            console.log('data', data);
        })
}

export function signIn({email, password}, navigate) {
    const url = getApis.signIn();
    fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: getFormBody({email, password}),
    })
    .then(async (response) => {
        const data = await response.json();
        console.log('data', data);
        localStorage.setItem('token', data.data.token);
        navigate('/home')
    })
}

export function createQuotations(){

}

export function userDetails(){
    return (dispatch) => {
        const userDetails = getApis.userDetails();
        fetch(userDetails, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then( async (response) => {
            const data = await  response.json();
            console.log("data", data.data.user);
            dispatch({type: USERDETAILS, data: data.data.user});
        })
        .catch((error) => {
            console.log("error", error);
        })
    }
}

export function quotations(){
    return (dispatch) => {
        const url = getApis.allQuotations();
        fetch(url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(async (response) => {
            const data = await response.json();
            console.log("data", data);
            dispatch({type: QUOTATIONS, data: data.data});
        })
        .catch((error) => {
            console.log("error", error)
        })
    }
}