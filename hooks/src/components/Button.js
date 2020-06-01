import React from 'react'

function Button({increase,children}) {
    console.log(`All to the ${children}`)
    return (
        <div>
            <button onClick={increase}>{children}</button>
        </div>
    )
}

export default React.memo(Button)
