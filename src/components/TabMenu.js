import React from 'react'

const TabMenu = (toggleChartHandler) =>{
    return (
        <div>
            <input onClick={toggleChartHandler} value='Table' type='button'/>
            <input value='Bar' type='button'/>
            <input value='Line' type='button'/>
            <input value='Pie' type='button'/>
            <input value='Scatter' type='button'/>
        </div>
    );
};

export default TabMenu;