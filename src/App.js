import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Counters from './Counters';


class App extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  };

  handleIncrement = (counter) =>{
    const counters =[...this.state.counters];
    // console.log(counters);
    const index = counters.indexOf(counter);
    // console.log(index);
    counters[index] = {...counters[index]};
    // console.log(counters[index]);
    counters[index].value++;
    // console.log(counters[index])
    this.setState({counters})
    // console.log({counters}) 
  };
  
  handleDecrement = (counter) =>{
    const counters =[...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counters[index]};
    counters[index].value--;
    this.setState({counters})
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId) ;
    this.setState({counters}) ; 
  };


  handleRefresh = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters})
  };

  handleRestart= () => {
    window.location.reload();
  };


  render() {
    return (
      <div className="App">
        <Header 
          totalCounters= {this.state.counters.filter(c => c.value > 0).length}        
        />
        <Counters  
          counters={this.state.counters}
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
          ondelete={this.handleDelete}        
          refresh={this.handleRefresh}
          restart={this.handleRestart}
        />
      </div>
    );
  }
}

export default App;
