import React, {Component} from "react"; 
import { Button, message} from "antd";

/**
 * 应用的根组件
 *  */ 

export default class App extends Component{

    handleClick=()=>{
        message.success('successful');
    }

    render(){
        return <Button type="primary" onClick={this.handleClick}>Primary</Button>
    }
}