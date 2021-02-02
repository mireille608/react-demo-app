import React,{Component} from 'react';
import { unmountComponentAtNode } from 'react-dom';

class Clock extends Component{
    constructor(props){
        super(props)
        
        this.state ={
            date: new Date(),
            
        };

    }
    componentDidMount(){
        this.timerID= setInterval(
          ()=> this.tick(),
          
          1000  
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div className="Clock">
                 { this.state.date.toLocaleTimeString()}
            </div> 
        )
    }
}
export default Clock;
