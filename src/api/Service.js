import axios from 'axios'

// return을 선언하지 않으면 return undefined랑 같음

export const getMenus = () => axios.get("http://0.0.0.0:3001/menus").then((res)=>res);

export const getStores = () => {
    return axios.get('http://0.0.0.0:3001/stores').then((res) => {
        return res
    })
}

export const getReviews = () => {
    return axios.get("http://0.0.0.0:3001/reviews").then((res)=>{
        return res;
    })
}
