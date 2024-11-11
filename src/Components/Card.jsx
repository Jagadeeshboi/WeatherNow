import React from 'react'

const Card = ({width="max-w-96",children}) => {
    return (
        <div className={`${width}  shadow-md rounded-lg p-6`}>
            {children}
        </div>
    )
}

export default Card
