import React, { useState, useEffect } from 'react'
import ReactConfetti from 'react-confetti'

const Confetti = () => {

    const [windowDimension, setDimension] = useState({ width: window.innerWidth, height: window.innerHeight })

    const [Btn, setBtn] = useState(false)

    const detectSize = () => {
        setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)
        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimension])

    return (
        <>

            <button onClick={() => setBtn(!Btn)}>Add To Cart</button>
            {Btn && <ReactConfetti
                width={windowDimension.width}
                height={windowDimension.height}
                tweenDuration={1000}
            />}


        </>
    )
}

export default Confetti