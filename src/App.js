import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import logo from './logo.svg';
import './App.css';
import { decrementCounter, incrementCounter } from './redux/action';

function App(props) {
  console.log({props})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{props.counter}</h3>
        <button onClick={() => props.increment()}>UP</button>
        <button onClick={() => props.decrement()}>DOWN</button>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counterReducer.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators({
      increment: () => incrementCounter(),
      decrement: () => decrementCounter(),
    }, dispatch)
  }
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default connectedApp;
