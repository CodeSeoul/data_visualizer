import React from 'react';
import Column from './helper/Column';
import { render } from "react-dom";

import {
    VictoryPie,
} from 'victory';





const PieChart = () => {
    return <div className="Pie">
        <h1>Pie Chart.</h1>
        <Column/>
        <VictoryPie/>
    </div>;
};
/*
const container = document.createElement("div");
document.body.appendChild(container);
render(<PieChart ></PieChart>, container);
*/
export default PieChart;



