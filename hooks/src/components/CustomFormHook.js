import React from 'react'
import useForm from './useForm'

function CustomFormHook() {

const [fname,bindFname,fNameReset] = useForm('')
const [lname,bindlname,lNameReset] = useForm('')

const submitHandler = () =>{
    alert(`Fname: ${fname} and Lname:${lname}`)
    fNameReset()
    lNameReset()

}

    return (
        <div>
            <form onSubmit={submitHandler}>
            <input type="text" {...bindFname}/>
            <input type="text" {...bindlname}/>
            <input type="submit" value="SUBMIT" />
            </form>
        </div>
    )
}

export default CustomFormHook
