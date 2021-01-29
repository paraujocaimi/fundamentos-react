import React from 'react';

export default (props) => {
    return (
        <>
            <button
                onClick={props.onSorteio} 
            >{props.children}</button>
        </>
    )
}