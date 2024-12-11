//------------------------------------------------- Parent component for toggleComponent -----------------------------------------------------
import React, { Component } from 'react'
import ToggleComponent from './ToggleComponent'

export class ComponentWillUnMount extends Component {
constructor(){
  super()
  this.state = {
    toggle : true
  }
}


  render() {
    console.log(this.state.toggle)
    return (
      <div style={{border:"2px solid green", padding: "4rem"}}>
      <h2>Life Cycle methods | Component Will UnMount</h2>
{/* Yahaan my btn ky click hony par toggle component ko UNMOUNT kara raha hon or phr issi trha dobara click hony par component ko wapis bhe 
laa raha hon means ky MOUNT bhe kara raha hon by using toggle btn */}
      <button onClick={()=>this.setState({toggle: !this.state.toggle})}>Click for Unmount and mount the Toggle component</button>
      {this.state.toggle && <ToggleComponent/>}
      
      </div>
    )
  }
}

export default ComponentWillUnMount

// Consclusion:
// ComponentWillUnMount ko smjhnay ky liye hamary pas 2 Components hony chaihyee. Ham kaein gy kia ? Ham aik toggle button banayen gy or ham 
// uss button ky click hony par ham aik new component ko render bhe karwain gy or phr dobara button ky click par usi component ko DOM sy remove
//  bhe karwain gy to jb component remove hogy ga to ap dekho gy ky component will un mount wala method call hoga.

// Q1 )Yah kis phase ka method hay ?
// Iss ky name sy pta chal raha hy yah Unmount phase ka method hay. Unmounting ka mtlb hay jab hamara component remove kar diya jata hy 
// DOM sy to tab yah wala method call hota hay. 

