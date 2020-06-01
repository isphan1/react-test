import React, {useState,useEffect} from 'react'

function HockMouse() {

    const[x,setX] = useState(0)
    const[y,setY] = useState(0)

    const logMouseMove = e =>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('Mouse Move')
        window.addEventListener('mousemove',logMouseMove)

        return () =>{
            console.log("component unmouting")
            window.removeEventListener('mousemove',logMouseMove)
        }
    },[])

    return (
        <div>
            X - {x} and Y - {y}

        </div>
    )
}

export default HockMouse
