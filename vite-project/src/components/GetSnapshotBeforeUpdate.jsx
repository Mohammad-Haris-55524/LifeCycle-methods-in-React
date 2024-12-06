import React, { Component } from 'react'
import ShouldComponentUpdate from './ShouldComponentUpdate'
import ComponentDidUpdate from './ComponentDidUpdate'

class GetSnapshotBeforeUpdate extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
        console.log("Constructor Method !")}

componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Component did Update Method !") 
    console.log(snapshot, (snapshot.count * 10) + this.state.count )
    console.log(prevProps, prevState)

}

// Iss method ko agar ham component did update ky beghair use karein gy to hamey warning dekhny ko mili gi ky iss method ko component did
// update ky sath use karo 
    getSnapshotBeforeUpdate(prevProps, prevState,snapshot){
        console.log("Get Snapshot Before Update Method !")  
        console.log(snapshot, prevState, prevProps)
        return prevState
    }

    counterHandler = () => {
this.setState({count: this.state.count + 1})
    }
  render() {
    console.log("Render Method !")

    return (
    <>
    <h2>Get Snapshot Before Update | Life Cycle Method</h2>
    <div>

        <button onClick={this.counterHandler}>Counter {this.state.count}</button>
    </div>

    
    </>
    )
  }
}

export default GetSnapshotBeforeUpdate
// ----------------------------------------------------------------------------------------------------------------------------------------
// Update Phase ka Correct Order:
// 1) shouldComponentUpdate()
// Sabse pehle ye method call hota hai, lekin sirf tab jab aap is method ko implement karte hain.
// Purpose: Ye decide karta hai ki component ko re-render karna chahiye ya nahi.
// Agar false return kare, to aage ke lifecycle methods call nahi honge (na render, na getSnapshotBeforeUpdate, na componentDidUpdate).

// 2) render()
// Agar shouldComponentUpdate() ne true return kiya (ya use implement nahi kiya), tab ye method call hota hai.
// Purpose: Ye JSX ko DOM me update karta hai.

// 3) getSnapshotBeforeUpdate()
// DOM update hone se pehle call hota hai, aur aap yahan se koi snapshot le sakte hain (jaise scroll position, DOM dimensions, etc.).
// Return value: Jo value return hoti hai wo componentDidUpdate() me as a third argument milti hai.

// 4) componentDidUpdate()
// DOM update hone ke baad call hota hai.
// Purpose: DOM me koi action lena (e.g., scroll restore karna, external API notify karna, etc.).


// Order of Execution in short:
// 1) shouldComponentUpdate() (Check karega ki re-render karna hai ya nahi).
// 2) render() (DOM ko update karega).
// 3) getSnapshotBeforeUpdate() (DOM update hone se pehle snapshot capture karega).
// 4) componentDidUpdate() (DOM update hone ke baad action lega aur snapshot ko use karega)

// -------------------------------------------------------------------------------------------------------------------------------------------

// Agar shouldComponentUpdate() ko Implement Nahi Kiya Gaya:
// React by default shouldComponentUpdate() ko skip karta hai aur seedha render() call karta hai.
// Iska matlab agar shouldComponentUpdate() method ko define nahi kiya to, React har state ya props update pe render karega.


// Key Points:
// 1) Agar shouldComponentUpdate() false return kare:
// render(), getSnapshotBeforeUpdate(), aur componentDidUpdate() nahi chalenge.
// 2) getSnapshotBeforeUpdate() aur componentDidUpdate() ka use sirf tab hota hai jab aapko DOM ke previous state ki zarurat ho.