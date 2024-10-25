import React, {Component} from "react";
 class Random extends Component{
    render(){
      const { obj, nextText, prevText } = this.props;
      const { text, author } = obj

        return(
            <div className="App">
            <p>
              {text}
            </p>
            <p> {author ? author : "no author"}</p>
            <div className="buttons">
              <button onClick={prevText}>Previous</button>
              <button onClick={nextText}>Next</button>
            </div>
          </div>
        )
    }
 }

 export default Random
 