
import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Widget = ({ id, type, onRemove, index, onRearrange }) => {
  const [, drag] = useDrag({
    type: 'WIDGET',
    item: { id, index },
  });

  const [, drop] = useDrop({
    accept: 'WIDGET',
    hover: (item) => {
      if (item.index !== index) {
        onRearrange(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} style={{ border: '1px solid black', margin: '8px' }}>
      <h3>{type} Widget</h3>
      <button onClick={onRemove}>Remove</button>
      {}
    </div>
  );
};

export default Widget;
