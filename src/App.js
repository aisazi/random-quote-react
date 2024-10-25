import './App.css';
import React,{Component} from 'react';
import Random from './random';
import { quotes } from './data'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      array: quotes,
      index: 0
    }
    this.nextText = this.nextText.bind(this)
    this.prevText = this.prevText.bind(this)
  }
  nextText() {
    const { array, index } = this.state
    if (index < array.length) {
      this.setState({ index: index + 1 })
    }
  }
  prevText() {
    const { index } = this.state
    if (index > 0) {
      this.setState({ index: index - 1 })
    }
  }
  
  render() {
    const { index, array } = this.state
    return (
      <div>
        <Random 
          nextText={this.nextText} 
          prevText={this.prevText} 
          obj={array[index]} 
        />
      </div>
    )
  }
}

export default App;

