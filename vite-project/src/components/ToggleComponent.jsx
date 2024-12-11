import React, { Component } from 'react'

export class ToggleComponent extends Component {
  componentWillUnmount(){
    alert("Toggle Component has be unmounted from the DOM!")
  }
  render() {
    return (
    <div style={{border:"2px solid red"}}>
      <h4>I am from Toggle Component</h4>
    </div>
    )
  }
}

export default ToggleComponent