import React from 'react';
import Column from './helper/Column';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const BarChart = () => {
    return (
        <div>Bar Chart
            <Column />
        </div>
    );
};

export default DragDropContext(HTML5Backend)(BarChart);