import React from 'react';


// class WindowContainer extends React.Component {
//     render() {
//         // return React.createElement('h1',null, props.children );
//         return <h1 >{props.children}</h1>
//     }
// }


// const WindowContainer = (props) => React.createElement('h1',null, props.children );
const WindowContainer =  (props) => <h1>{props.children}</h1>

export default WindowContainer;