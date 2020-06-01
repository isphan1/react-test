import React from 'react'
import ReactDom from 'react-dom'

function Portal() {
    return ReactDom.createPortal(
        <div>
            Portal offer
        </div>,
        document.getElementById('portal-root')
    )
}

export default Portal
