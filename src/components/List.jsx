import React from "react";
import Item from './Item'

const List = ({tasks}) => {
    let taskDisplay = tasks.map((task) => {
        return <Item task={task} />
    })

  return (
    <ul>
        {taskDisplay}
    </ul>
  )
};

export default List;
