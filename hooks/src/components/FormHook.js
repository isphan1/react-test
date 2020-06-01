import React,{useState} from 'react'

function FormHook() {

    // const [name,setName] = useState({fname:'',lname:''})

    const [items,setItems] = useState([])

    const addItem = () =>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }

    return (
        <div>


            <button onClick={addItem}>Add Item</button>

            {/* <form>
                <input type="text" value={name.fname} onChange={e => setName({...name,fname: e.target.value})}/>
                <input type="text" value={name.lname} onChange={e => setName({...name,lname: e.target.value})}/>
                <p>Your fname: {name.fname} and lname: {name.lname}</p>
            </form> */}

            <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.value}</li>
                        )
                    )
                    }
            </ul>


        </div>
    )
}

export default FormHook
