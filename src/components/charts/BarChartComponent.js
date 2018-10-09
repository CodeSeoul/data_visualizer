import React from 'react';
import ColumnsContainer from './helper/ColumnsContainer';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const BarChart = data => {
    return (
        <div>Bar Chart
            <ColumnsContainer columns={data.data[0]} />
        </div>
    );
};

export default DragDropContext(HTML5Backend)(BarChart);