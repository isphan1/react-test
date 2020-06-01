import React from 'react'
import Person from './Person'

function Namelist() {

    const person = [

        {
            name:'abul',
            age:24,
            area:'dhaka'
        },
        {
            name:'hasu',
            age:71,
            area:'bagra'
        },
        {
            name:'lalu',
            age:12,
            area:'comilla'
        },
        {
            name:'bulu',
            age:56,
            area:'barisal'
        },
        {
            name:'kanu',
            age:44,
            area:'khulna'
        },
    ]

    
    const personList = person.map((person,index) => <Person key={index} person={person} />)

    return  (<div>{personList}</div>)
    
}

export default Namelist
