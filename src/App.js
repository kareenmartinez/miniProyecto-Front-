import React from "react";
import "./App.css";
import store from "./store/index";
import { fetchPadre, fetchHijos } from "./store/actions";
class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    store.dispatch(fetchPadre());
    store.dispatch(fetchHijos());
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    console.log(this.state);
    console.log("hola");
    return (
      <div className="App">
        {this.state.padre.length &&
          this.state.padre.map(papi => (
            <ul>
              {papi.name}
              {this.state.hijos.length &&
                this.state.hijos.map(hijo => <li>{hijo.name}</li>)}
            </ul>
          ))}
      </div>
    );
  }
}

export default App;
