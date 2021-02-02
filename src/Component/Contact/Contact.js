import React,{Component} from 'react';

class Contact extends Component{
    constructor(props){
        super(props)

        this.state ={
        Submitted:false,
        formData: {
            firstName:'',
            lastName:'',

        }
        }
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
        this.setState({Submitted:true})
    }
    resetForm =(event)=>{
        this.setState({Submitted: false,
        formData:{
            firstName:"",
            lastName:"",
        }
    })
    }

    render(){
        if (this.state.Submitted === true){
            return(
                <div>
                    Thanks {this.state.formData.firstName}!
                    <br/>
                    <button>Reset</button>
                </div>
            )
        }

        return(
        < div className="Contact">
            <form>
                <div>
                <label htmlFor='firstName'>First Name</label>
                <input
                type='text'
                name='firstName'
                value = {this.state.formData.firstName}
                onChange={this.handleChange}
                
                />
        </div>

        <div>
            <label htmlFor='lastName'>Last Name</label>
            <input
            type='text'
            name='lastName'
            value = {this.state.formData.lastName}
            onChange={this.handleChange}
            
            />
        </div>
        <button>Submit</button>
        </form>
        <div>
            {this.state.formData.firstName}
            <br/>
            {this.state.formData.lastName}
        </div>
        </div>
        )
    }
}
export default Contact