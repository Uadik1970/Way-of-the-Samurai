import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg5d7LJ-pf5J-6Odq-PNGwFpIyRkwii5vW_A&usqp=CAU" alt=""/>
            </div>
            <div>
                {props.message}
            </div>
        </div>
    )
}

export default Post