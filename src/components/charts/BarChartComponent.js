import React from 'react';
import Column from './helper/Column';
import Axis from './helper/Axis';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const BarChart = () => {
    return (
        <div>Bar Chart
            <Column />

            <Axis />
        </div>
    );
};

export default DragDropContext(HTML5Backend)(BarChart);