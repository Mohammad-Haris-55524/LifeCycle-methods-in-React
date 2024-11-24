import React, { Component } from 'react'
import Constructor from './Constructor'

export class Render extends Component {
  render() {
    return (
      <div>Render</div>
    )
  }
}

export default Render

// Q1) Render method hota kia hay or Render method karta kia hay iss ka kaam kiya hay ?
//  Ap ny nota kiya hoga jab bhe ham apna class based Component banaty han to ham RENDER METHOD ka use zaroor karty han. Render Component hmary 
//  Component ko render karta hay webpage par. Jo bhe UI hamey webpage par nazar ati hay woh hamey hamra render method ki wjah sy hi show hoti hy

// Q2) Render method hamara kab call hota hay ?
// 1) Jab component pehli baar mount ho raha ho (initial rendering).
// 2) State update hone par: Agar this.setState() ki wajah se state change hoti hai, toh render method dobara call hoga.
// 3) Agar parent component se naye props milte hain, toh render method call hoga aur UI ko update karega.


// Q3) Render method call kitne bar hota hay ?
// 1) Render method 1st time tab call hota hay jab hamara Component banta hay yah phr 1st time MOUNT hota hay to isii time hamara Constructor
// method sab sy phely call hota hay or iss ky foran baad hamara RENDER METHOD call hota hay.
// 2) Jab hamary Component my STATE update hogi to tab bhe hamara RENDER method call hoga sath my hamari UI ko RERENDER kary ga taaky hamey 
// updated UI show/render kara saky. 
// 3) Jab hamary Component my PROPS update hon gy to tab bhe hamara render method call hoga sath my hamari UI ko RERENDER kary ga taaky hamey 
// updated UI show/render kara saky. 

// Q4) Render method ke andar kya nahi karna chahiye?
// ANSWER:
// Render method ke andar kuch cheezein avoid karni chahiye:
// Side effects: Jaise DOM manipulation, API calls, ya event listeners ka use render method ke andar nahi karna chahiye. Yeh cheezein lifecycle
// methods jaise componentDidMount mein karni chahiye. State ko update karna: Render method ke andar this.setState() use karna forbidden hai, 
// kyunki isse infinite loop create ho sakta hai.


// Q5) Render method kyun baar-baar call hota hai?
// ANSWER:
// Render method ko baar-baar call hone ka kaaran hota hai:
// React ka mechanism jo ensure karta hai ki UI hamesha updated rahe.
// Agar state ya props mein change aata hai, toh React UI ko re-render karta hai taake woh nayi changes ko reflect kar sake.

// Additional Tip:
// Agar unnecessary renders ko avoid karna ho, toh aap lifecycle methods jaise shouldComponentUpdate() ko use karty han class component my.
// Yah phr React.memo (functional components mein) ka use kar sakte hain.