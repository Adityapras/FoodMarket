import Axios from 'axios';
import { API_HOST } from '../../config';
import { getData } from '../../utils';

export const getOrders = () => (dispatch) => {
    getData('token').then(resToken => {
        Axios.get(`${API_HOST.url}/transaction`,{
            headers:{
                'Authorization' : resToken.value
            }
        }).then(res => {
            dispatch({type:'SET_ORDER', value: res.data.data.data})
        }).catch(err => {
        })
    })
   
}

export const getInProgress = () => (dispatch) => {
    getData('token').then(resToken => {
        Axios.all([
            Axios.get(`${API_HOST.url}/transaction?status=PENDING`,{
                headers:{
                    'Authorization' : resToken.value
                }
            }),
            Axios.get(`${API_HOST.url}/transaction?status=ON_DELIVERY`,{
                headers:{
                    'Authorization' : resToken.value
                }
            })
        ]).then(Axios.spread((res1,res2) => {
            const pending = res1.data.data.data;
            const onDelivery = res2.data.data.data;
            dispatch({type:'SET_IN_PROGRESS', value: [...pending,...onDelivery]})
        })).catch(err => {

        })
    })
   
}

export const getPastOrders = () => (dispatch) => {
    getData('token').then(resToken => {
        Axios.all([
            Axios.get(`${API_HOST.url}/transaction?status=CANCELLED`,{
                headers:{
                    'Authorization' : resToken.value
                }
            }),
            Axios.get(`${API_HOST.url}/transaction?status=DELIVERED`,{
                headers:{
                    'Authorization' : resToken.value
                }
            })
        ]).then(Axios.spread((res1,res2) => {
            const cancelled = res1.data.data.data;
            const delivery  = res2.data.data.data;
            dispatch({type:'SET_PAST_ORDERS', value: [...cancelled,...delivery]})
        })).catch(err => {

        })
    })
   
}
