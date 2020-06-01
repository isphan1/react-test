import React,{useEffect,useCallback,useState,useMemo,useRef} from 'react'
import Button from './Button'
import Title from './Title'
import Count from './Count'

function RefInput() {

    const [count,setCount] = useState(0)

    const [name,setName] = useState('')

    const [salary,setSalary] = useState(0)

    const [timer,setTimer] = useState(0)

    const inputRef = useRef(null)

    const textRef = useRef(null)

   const iseven = useMemo(()=>{
        return count %2 === 0

    },[count])

    useEffect( () => {
         inputRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000);

        return()=>{
            clearInterval(inputRef.current)
        }

    },[])

    const increaseCount = useCallback(
        () =>{
            setCount(count + 1)
        },
        [count]
    )
    
    const increaseSalary = useCallback(
        () =>{
            setSalary(salary + 1)
        },[salary]
    ) 

    const abc =() =>{
        setName(textRef.current.value)
    }

    return (
        <div>
            <h1>{iseven}</h1>
            <h1>{name}</h1>
            <input type="text" ref={textRef} onChange={abc}/>
            <button onClick={()=>{clearInterval(inputRef.current)}}>Clear timer</button>
            <h1>Time - {timer}</h1>
            <Title/>
            <Button increase={increaseCount}>Count increase</Button>
            <Count count={count} text="Count"/>
            <Button increase={increaseSalary}>Salary increase</Button>
            <Count count={salary} text="Salary"/>
        </div>
    )
}

export default RefInput
