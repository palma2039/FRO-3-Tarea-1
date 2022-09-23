import React, { Component } from "react";

export default class ConsumirAPIClases extends Component {
  constructor() {
    super();    
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    this.setState({data})    
  }

  render() {
    return <div>
                <ul>
                    {this.state.data.map((todo) => (
                    <li>
                        <p><b>ID:</b> {todo.id}</p>
                        <p><b>Titulo:</b> {todo.title}</p>
                    </li>
                ))}
                </ul>
            </div>;
  }
}