import React from 'react';
import TabMenu from '../components/TabMenu';
import BarChart from '../components/charts/BarChartComponent';
import LineChart from '../components/charts/LineChartComponent';
import PieChart from '../components/charts/PieChartComponent';
import ScatterPlot from '../components/charts/ScatterPlotComponent';

const chartContainerStyle = {
    textAlign:'center',
    border: '1px solid black',
    padding: 50,
};
class ChartContainer extends React.Component{
    state = {
        selectedChart : 'table'
    }

    toggleChartHandler = chartType => {
        this.setState({
            selectedTab: chartType
        });
    };
    render(){
        return  (
            <div>
                <TabMenu selectedChart={this.state.selectedChart}/>
                <div style={chartContainerStyle}> 
                    Chart Container
                </div>
            </div>
        )
    };
};

export default ChartContainer;
