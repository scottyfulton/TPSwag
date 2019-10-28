import React from 'react';
// import PropTypes from 'prop-types';

class MyButton extends React.Component{
    render(){
        return <Button>MyReact</Button>
    }
}

const Button = (props) => <button>{props.children}</button>

export default MyButton;