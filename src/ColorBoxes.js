import React, {useState} from 'react';
import Box from './Box';
import './ColorBoxes.css';
import {randomArr, choice} from './helpers';

const ColorBoxes = (props) => {
    const [boxes, setBoxes] = useState(
        randomArr(props.colors)
    )

    const changeBox = () => {
        const ran = Math.floor(Math.random() * props.colors.length);
        const boxesCopy = boxes.slice();
        boxesCopy[ran] = choice(props.colors);
        setBoxes(boxesCopy);

    }
    const boxComp = boxes.map((color, i) => {
        return <Box key={i} color={color} />
    })
    

    return (
        <div className='ColorBoxes'>
            <div className='ColorBoxes-section'>
                {boxComp}
            </div>
            <button onClick={changeBox}>Change Color</button>
        </div>
    )
}

ColorBoxes.defaultProps = {
    amount: 16,
    colors: [
        'green',
        'blue',
        'red',
        'yellow',
        'brown',
        'purple',
        'orange',
        'pink',
        'black',
        'gray',
        'white',
        'teal',
        'yellowgreen',
        'lavender',
        'tan',
        'peru'
    ]
}

export default ColorBoxes;