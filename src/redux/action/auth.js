import Axios from 'axios';
import { showMessage } from '../../utils';
import { setLoading } from './global';
import { storeData } from '../../utils';
import { API_HOST, API_PATH } from '../../config';


export const singUpAction = (dataRegister, photoReducer, navigation) => (dispatch) => {

    //send data to api 
    Axios.post(`${API_HOST.url}/register`, dataRegister).then((res) => {

            const userProfile = res.data.data.user;
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`;

            storeData('token', {
                value: token
            });

            // if using upload photo
            if (photoReducer.isUploadPhoto) {

                const photoForUpload = new FormData();
                photoForUpload.append('file', photoReducer);

                // upload photo to api 
                Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
                    headers: {
                        'Authorization': token,
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((res_upload_photo) => {
                    //save to local storage
                    userProfile.profile_photo_url = `${API_PATH.url}/${res_upload_photo.data.data[0]}`;
                    storeData('userProfile', userProfile);
                    navigation.reset( { index: 0, routes: [{name : 'SignUpFinish' }] });

                }).catch((err) => {

                    showMessage('upload photo gagal');
                    navigation.reset( { index: 0, routes: [{name : 'SignUpFinish' }] });

                })
            }else{
                storeData('userProfile', userProfile);
                navigation.reset( { index: 0, routes: [{name : 'SignUpFinish' }] });
            }

            dispatch(setLoading(false)); 
        })
        .catch((err) => {
            dispatch(setLoading(false));
            showMessage(`${err?.response?.data?.data?.message}`);
            console.log(err)
        });
}

export const signInAction =  (form, navigation) => (dispatch) => {
    dispatch(setLoading(true));
    Axios.post(`${API_HOST.url}/login` , form).then((res) =>{
        const userProfile = res.data.data.user;
        const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
        dispatch(setLoading(false));
        storeData('token', {value: token});
        userProfile.profile_photo_url = `http://10.0.2.2:80/food-market-backend/public/storage/${res.data.data.user.profile_photo_path}`;
        storeData('userProfile', userProfile);
        navigation.reset({index: 0, routes: [{name:'MainApp'}]});
    })
    .catch((err) =>{
        dispatch(setLoading(false));
        showMessage(`${err?.response?.data?.data?.message}`);

    });
}