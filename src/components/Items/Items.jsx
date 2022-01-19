import React from 'react'

const Items = (props) => {
    return (
        <div>
            <a href={props.href}>{props.text}</a>
        </div>
    )
}

export default Items


