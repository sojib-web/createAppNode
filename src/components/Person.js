import React, { Component } from "react";

    let Person = (props) => {
        console.log(props)
        return(
            <div>
              <h3>Name: {props.name} and  Age: {props.age} Years</h3>
              <h5>Extra Info : {props.children}</h5>
            </div>
        ); 
    }

    // class Person extends Component{
    //     constructor(props){
    //         super(props);
    //     }
    //     render(){
    //         console.log(this.props)
    //         return(
    //                     <div>
    //                       <h3>Name: {this.props.name} and  Age: {this.props.age} Years</h3>
    //                       <h5>Extra Info : {this.props.children}</h5>
    //                     </div>
    //                 );
    //     }
    // }


    // export default Person;