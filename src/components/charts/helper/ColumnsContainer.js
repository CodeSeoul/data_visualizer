import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Axis from './Axis';
import Column from './Column';


class ColumnsContainer extends React.Component{
    render(){

        const { columns } = this.props;
        console.log(columns);
        
        if(columns.data.length!==0){
            var columnsMap = columns.data[0].map((column,index) => {
                return(
                    <Column name={column} key={index} />
                )
            });
        }else{
            var columnsMap = "";
        }


        return(
            <DragDropContextProvider backend={HTML5Backend}>
                <Axis />
                <div>
                {columnsMap}
                </div>
            </DragDropContextProvider>
        );
    }
}

export default ColumnsContainer;