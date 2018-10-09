import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Axis from './Axis';
import Column from './Column';


class ColumnsContainer extends React.Component{
    render(){
        const columns = column => {
            return(
                <Column name={column.data[0]} />
            )
        };
        

        return(
            <DragDropContextProvider backend={HTML5Backend}>

                <Axis />
                <div>
                {columns}
                </div>
                
            
            </DragDropContextProvider>
        );
    }
}

export default ColumnsContainer;