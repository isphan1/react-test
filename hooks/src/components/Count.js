import React from 'react'

function Count({count,text}) {
    console.log(`${text} logging...........`)
    return (
        <div>
            <p>{count}</p>
        </div>
    )
}

export default React.memo(Count)
