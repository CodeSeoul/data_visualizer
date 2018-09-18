import React from 'react';
import TabMenu from '../components/TabMenu';
import BarChart from '../components/charts/BarChartComponent';
import LineChart from '../components/charts/LineChartComponent';
import PieChart from '../components/charts/PieChartComponent';
import ScatterPlot from '../components/charts/ScatterPlotComponent';
import Table from '../components/charts/TableComponent'

const chartContainerStyle = {
    textAlign:'center',
    border: '1px solid black',
    padding: 50,
};
class ChartContainer extends React.Component{
    state = {
        selectedChart : 'table'
    }

    toggleChart = e => {
        this.setState({
            selectedChart: e.target.id
        });
    };

    render(){
        return  (
            <div>
                <TabMenu handler={this.toggleChart}/>
                <div style={chartContainerStyle}> 
                    {this.state.selectedChart==='table' && <Table data={this.props.data}/>}
                    {this.state.selectedChart==='bar' && <BarChart />}
                    {this.state.selectedChart==='line' && <LineChart />}
                    {this.state.selectedChart==='pie' && <PieChart />}
                    {this.state.selectedChart==='scatter' && <ScatterPlot />}    
                </div>
            </div>
        )
    };
};

export default ChartContainer;
