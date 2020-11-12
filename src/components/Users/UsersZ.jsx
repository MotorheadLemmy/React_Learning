import * as axios from 'axios'
import React from 'react'
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'

let Users = (props) => {
    let getUsers=()=>{

    if (props.users.length===0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            
            props.setUsers(response.data.items)

        })


}
    }
    return (
    <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small!=null ? u.photos.small : userPhoto} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>)
}


export default Users

// props.setUsers([{
//     id: 1, photoUrl: 'https://static01.nyt.com/images/2010/05/28/arts/coleman1/coleman1-articleInline.jpg?quality=75&auto=webp&disable=upscale',
//     followed: true, fullName: 'Joe', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }
// },
// {
//     id: 2, photoUrl: 'https://static01.nyt.com/images/2010/05/28/arts/coleman1/coleman1-articleInline.jpg?quality=75&auto=webp&disable=upscale',
//     followed: false, fullName: 'Gary', status: 'What a nice day', location: { city: 'Zp', country: 'Ukraine' }
// },
// {
//     id: 3, photoUrl: 'https://static01.nyt.com/images/2010/05/28/arts/coleman1/coleman1-articleInline.jpg?quality=75&auto=webp&disable=upscale',
//     followed: true, fullName: 'Lars', status: 'need help asap!', location: { city: 'Krasnodar', country: 'Russia' }
// },
// {
//     id: 4, photoUrl: 'https://static01.nyt.com/images/2010/05/28/arts/coleman1/coleman1-articleInline.jpg?quality=75&auto=webp&disable=upscale',
//     followed: false, fullName: 'James', status: 'ahahah', location: { city: 'London', country: 'Uk' }
// }])

// })
