import React from 'react'

const Hobbit = (props) => {
    return(
        <div className="container hobbit">
            <h1>{props.hobbit.name}</h1>
            <h2>{props.hobbit.age}</h2>
            <h3>{props.hobbit.personality}</h3>
        </div>
    )
}

export default Hobbit