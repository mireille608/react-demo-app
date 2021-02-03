import React, { Component } from 'react';
//import our service
import JeopardyService from "../../jeopardyService";

class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component

  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      formData: {
          answer: "",
      }
    }
  }
  //get a new random question from the API and add it to the data object in state
 
  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }

  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }
  handleChange = (event) => {
    const formData = {...this.state.formData}
   // console.log(formData)
    //console.log(event.target.value)
    //console.log(event.target.value)
    formData[event.target.name] = event.target.value
    this.setState({formData})
    
    
}
handleSubmit = (event) =>{
    event.preventDefaut();
    if (this.state.date.answer === this.state.formData.answer){
        console.log('Good')
        this.setState( (state,props) =>({
           score:state.score + state.data.value,
           formData:{
               answer: ""
           } 
        }))
    }else {
        console.log('No Good')
        this.setState((state, prop) => ({
            score: state.score - state.data.value,
            formData: {
                answer:""
            }
    }))
}

    this.setState({Submitted:true})
}

 
  //display the results on the screen
  render() {
      console.log(this.state.data)
      console.log(this.state)

      if (!(this.state.data.category)){
          return <div>work</div>;
      }

    return (
        
      <div>
          <div>
              <label>Question:</label>
              <p>{this.state.data.question}</p>
              <div>
                  <label>Value: </label>
                  <p>{this.state.data.value}</p>
                  <div>
                      <label>Category: </label>
                      {this.state.data.category.title}
                      <div>
                          <label>Score: </label>
                          {this.state.score}
                      </div>
                  </div>
              </div>
          </div>
          <form onSubmit= {this.handleSubmit}>
          

                <div>
            <label htmlFor="answer">Answer</label>
            <input
            type='text'
            name= "answer"
            value = {this.state.formData.answer}
            onChange={this.handleChange}
            
            />
        </div>
        <button>Submit</button>
        </form>
        
      </div>
    );
  }
}
export default Jeopardy;