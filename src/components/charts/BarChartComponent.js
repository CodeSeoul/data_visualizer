import React from 'react';
import ColumnsContainer from './helper/ColumnsContainer';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const BarChart = data => {
    return (
        <div>
            {data.data.length === 0 && <div>BarChart</div>}
            <ColumnsContainer columns={data} />
        </div>
    );
};

export default DragDropContext(HTML5Backend)(BarChart);