import * as axios from 'axios'

const instance=axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"db286642-ef58-47cb-9bf4-9afa84f2111e"
     }
})

export const usersAPI={
    getUsers(currentPage=1,pageSize=10){
        return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>{
           return response.data
        })
        }

}



