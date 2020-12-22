import React from 'react';
import './Box.css'

const Box = (props) => {
    return (
        <div className='Box'style={{backgroundColor: props.color}}>
            {props.selected === true ? <p>Clicked!</p> : <p></p>}
        </div>
    )
}

export default Box;