import React from 'react'
import useCounter from './useCounter'
function CustomeHook() {
    const [count,increase,decrease,reset] = useCounter()
    return (
        <div>
            count:{count}
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CustomeHook
