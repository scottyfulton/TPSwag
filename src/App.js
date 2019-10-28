import React from 'react';
import PropTypes from 'prop-types';
import WindowContainer from './components/WindowContainer';
import MyButton from './components/MyButton';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    }
  }
  update(e) {
    this.setState({ txt: e.target.value })
  }

  buttonUpdate(e) {
    // e.
    console.log('cat ++')
    // this.setState({ cat: e.cat +1})
  }


  render() {
    return (
      <div className='App'>
        <header className="App-header">
          {/* <ButtonWidget buttonUpdate = {this.buttonUpdate}/> */}
          {/* <button onClick = {this.buttonUpdate} >React</button> */}
          <MyButton onClick = {this.buttonUpdate}>MyR</MyButton>
          <Widget update = {this.update.bind(this)}/>
          <WindowContainer>{this.state.txt} - {this.state.cat}</WindowContainer>
        </header>
      </div>
    )
  }
}



//stateless function components
const Widget = (props) =>
  // <input type='password' onChange={props.update}></input>
  <input type='text' onChange={props.update}></input>

  //stateless function component
const ButtonWidget = (props) =>
// <input type='password' onChange={props.update}></input>
<MyButton onClick = {props.buttonUpdate}></MyButton>



// class App extends React.Component{
//   render(){
//     let txt = this.props.txt
//     return (
//       <div className = 'App'>
//         <header className="App-header">
//         <WindowContainer>{txt}</WindowContainer>
//         </header>
//       </div>
//     )
//   }
// }

App.propTypes = {
  txt: PropTypes.string,
  num: PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the d-falt text'
}

export default App;
