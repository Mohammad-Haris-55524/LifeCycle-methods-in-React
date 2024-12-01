import React, { Component } from 'react'
import differenceBwtShouldComponentUpdateAndComponentDidUpdate from "../assets/difference.png"

export class ShouldComponentUpdate extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            userName: "Mohammad Haris"
        }
        console.log("Constructor")
    }
    shouldComponentUpdate(prevProps, prevState){
    console.log("Should Component Update", this.state.count, prevProps, prevState)
    // return false  (by default it returns false yani agar yah method bana diya to yah component ko REREDNER hony sy rok dy ga)

    // Use case example # 01 (How can we use Should Component Update method)
    // Sirf even numbers par hi component ko Rerender karwao bss
    // if(prevState.count % 2 === 0){
    //   return true
    // }
    // return false
    // }

    // Use case example # 02 (How can we use Should Component Update method)
    // Sirf Count 5 sy count 10 ly darmain waly number par hi component ko rereder hony dena
    if(prevState.count >= 5 && prevState.count <=10){
      return true
    }
    return false
    }

    increment = () => {
      this.setState({count: this.state.count + 1})
    }
  render() {
    console.log("Render")
    return (
      <>
      <h2>Should Component Update | Life cycle Method</h2>
      <h1>Counts {this.state.count} </h1>
      <button onClick={this.increment}>Counter</button>
      <div>
        <img src={differenceBwtShouldComponentUpdateAndComponentDidUpdate} alt="" />
      </div>
      
      </>
      
    )
  }
}

export default ShouldComponentUpdate

// -----------------------------------------------------------------------------------------------------------------------------------------
// Should component update  method:
// ShouldComponentUpdate ek lifecycle method hai jo sirf class components mein use hoti hai, Ye method update phase ka part hay. Ye method 
// React ko batata hai ke jab component ke props ya state mein change aaye, toh kya component ko re-render karna chahiye ya nahi.

// Q1) Should component update kis phase ka method hay ?
// Ans: Update sy pta chal raha hy yah updating phase ka method hay. Koi bhe cheez update hogi sirf tab hi yah method call hoga.

// Q2) Should component update method Kyun Use Karte Hain?

// Ans: Jab React component ka state ya props change hoti hai, toh by default React us component ko dobara Rerender karta hai. Lekin har baar 
// Rerender karna zaruri nahi hota kuch cases.
// Agar unnecessary rendering ko avoid karna ho, toh shouldComponentUpdate ka use karke aap bata sakte hain:
// Agar render nahi karna chahiye → return false karo (By default shouldComponentUpdate Return false karta hay yani component ko Rerender hony 
// nahe deta)
// Agar render karna chahiye → return true karo. (True karny sy hamara component dobara default tarikay sy kaam karna start kar dy ga means yah ky
// STATE/PROPS update hony par component ko dobara sy RENDER karna start kar dy ga)
// Iska faida ye hota hai ke app ki performance improve ho jaati hai, kyun ke React sirf tab render karega jab zarurat hogi.


// Q3) Koi aisa method hay yah koi aisa tarika hay ky my apna RENDER method ko RENDER hony sy yah phr call hony sy ruk sako means ky jab bhe 
// props yah state/props update hon to my apnay component ko RENDER hony sy rok sako koi aisa tarika hay ?

// Ans: G han bilkul roka jaa skta hay. Should component update ka use kar ky ham apnay Render method ko RENDER hony sy ruk skty han ky jab bhe
// koi STATE/PROPS update ho to hamary component dobara sy RENDER yah update nahe hona chaihyee.

// Q4) Should component update Kab Use Karna Chahiye ?
// Ans: 1) Performance optimization ke liye.
//      2) Jab apko pata ho ke har update pe re-render karne ki zarurat nahi hai.
//      3) Heavy components ke liye, jo complex calculations ya animations karte hain.

// -----------------------------------------------------------------------------------------------------------------------------------------
