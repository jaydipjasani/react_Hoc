import React, { useState } from 'react'

const Training = (Men) => {

    const NewMen = () => {
        const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 2)
    }
        return (
            <div>
                <Men gunname={"AK47"} 
                handleClick = {handleClick}
                count = {count}
                />
            </div>

        )
    }
    return NewMen;
}

export default Training;