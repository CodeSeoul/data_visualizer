import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Axis from './Axis';
import Column from './Column';


class ColumnsContainer extends React.Component{
    render(){

        const { columns } = this.props;
        let columnsMap = "";
        console.log(columns);
        
        if(columns.data.length!==0){
            columnsMap = columns.data[0].map((column,index) => {
                return(
                    <Column name={column} key={index} />
                )
            });
        };


        return(
            <DragDropContextProvider backend={HTML5Backend}>
                <Axis type='X-axis'/>
                <div>
                    {columnsMap}
                </div>
                <Axis type='Y-axis'/> 
            </DragDropContextProvider>
        );
    }
}

export default ColumnsContainer;