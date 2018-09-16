import React from 'react'

const TabMenu = ({handler}) =>{
    return (
        <div>
            <input onClick={e=>handler(e)} id='table' value='Table' type='button'/>
            <input onClick={e=>handler(e)} id='bar' value='Bar' type='button'/>
            <input onClick={e=>handler(e)} id='line' value='Line' type='button'/>
            <input onClick={e=>handler(e)} id='pie' value='Pie' type='button'/>
            <input onClick={e=>handler(e)} id='scatter' value='Scatter' type='button'/>
        </div>
    );
};

export default TabMenu;