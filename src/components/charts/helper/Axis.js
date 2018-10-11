import React from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './Constants';
import { DropTarget } from 'react-dnd';

const collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
};

const axisTarget = {
    drop(){
        return {name : 'Axis'}
    },
}


class Axis extends React.Component {
    render(){
        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div>Drop Column Here
            {isOver &&
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  zIndex: 1,
                  opacity: 0.5,
                  backgroundColor: 'yellow',
                }} />
              }
            </div>
            

        )
    }     
}

Axis.propTypes ={
    connectDropTarget: PropTypes.func.isRequired
}

export default DropTarget(ItemTypes.COLUMN, axisTarget, collect)(Axis);