import React from 'react';



export default props =><div style={{textDecoration: props.todo ? "line-through" : ""}} onClick={props.toggleComplete}>{props.text}</div>
;