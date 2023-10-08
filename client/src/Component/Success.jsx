import React from 'react'

export default function Success({show}) {
    return (
        <div>
            <div className="alert alert-success" role="alert">
               {show}
            </div>
        </div>
    )
}
