import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DragSource } from 'react-dnd';

const columnSource = {
    beginDrag(props,monitor,component){
        return {
            name: props.name
        };
    },
    endDrag(props,monitor,component){
        if (!monitor.didDrop()) {
            return;
          }

        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        
        if(dropResult){
            console.log(`You dropped ${item.name} into ${dropResult.name}!`);
        }
    }
};

const collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging:monitor.isDragging()
    }
}

class Column extends React.Component {
    render(){
        const {connectDragSource, isDragging} = this.props;
        return connectDragSource(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move'
              }}>
            {this.props.name}  
            </div>
        );
    };
}

Column.propTypes={
    connectDragSource: PropTypes.func.isRequired,
    isDragging : PropTypes.bool.isRequired
}


export default DragSource(ItemTypes.COLUMN, columnSource, collect)(Column);