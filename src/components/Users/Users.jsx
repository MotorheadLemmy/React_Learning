import React from 'react'
import styles from './Users.module.css'

let Users = (props) => {
    if (props.users.length===0){
    props.setUsers([{
        id: 1, photoUrl: 'https://static01.nyt.com/images/2010/05/28/arts/coleman1/coleman1-articleInline.jpg?quality=75&auto=webp&disable=upscale',
        followed: true, fullName: 'Joe', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' }
    },
    {
        id: 2, photoUrl: 'https://static01.nyt.com/images/2010/05/28/arts/coleman1/coleman1-articleInline.jpg?quality=75&auto=webp&disable=upscale',
        followed: false, fullName: 'Gary', status: 'What a nice day', location: { city: 'Zp', country: 'Ukraine' }
    },
    {
        id: 3, photoUrl: 'https://static01.nyt.com/images/2010/05/28/arts/coleman1/coleman1-articleInline.jpg?quality=75&auto=webp&disable=upscale',
        followed: true, fullName: 'Lars', status: 'need help asap!', location: { city: 'Krasnodar', country: 'Russia' }
    },
    {
        id: 4, photoUrl: 'https://static01.nyt.com/images/2010/05/28/arts/coleman1/coleman1-articleInline.jpg?quality=75&auto=webp&disable=upscale',
        followed: false, fullName: 'James', status: 'ahahah', location: { city: 'London', country: 'Uk' }
    }])
}
    return (
    <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>UnFollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>)
}


export default Users