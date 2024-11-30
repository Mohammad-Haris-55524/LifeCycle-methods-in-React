import React, { Component } from 'react'
import Constructor from './Constructor'

// export class ComponentDidUpdate extends Component {
//     constructor(){
//         super()
//         this.state = {
//            count : 0
//         }
//         console.log("Constructor")
//     }
// // componentDidUpdate my 3 parameters milty han (prevProps, prevState, snapshot)
//     componentDidUpdate(prevProps, prevState, snapshot){
//         console.log(prevProps, prevState, snapshot)
//         console.log("ComponentDidUpdate")

//     }
//   render() {
//     console.log("Render")
//     return (
//       <>
//       <h2>Component Did Update | LifeCycle Method</h2>
//       <h3>Count {this.state.count}</h3>
//       <button onClick={()=>this.setState({count: this.state.count + 1})}>Counter</button>
//       </>
//     )
//   }
// }

// export default ComponentDidUpdate


// Q1) ComponentDidUpdate Kis phase ka method hay Life cycle ky ? 
// ComponentDidUpdate Aik life cycle method hay. Yah Update phase ka method hay.

// Q2) ComponentDidUpdate Kab call hoga ?
// Yah method tab call hoga jab bhe hamary Component my koi updatation aye gi. Name sy zahir ho rha hy update phase ka method hay to yah 
// hamehsha tab call hoga jab bhe hamary Component my koi bhe STATE/PROPS update hongy to foran RENDER method call hoga jo ky hamary component 
// ko rereder kary ga phr Render ky foran baad ComponentDidUpdate ka life cycle method call hoga.

// -------------------------------------------------------------------------------------------------------------------------------------------
// WORKING MECHANISM OF "componentDidUpdate"
// ComponentDidUpdate sirf tab call hota hay jab Component my koi updatation ate hay. Uss ki example ham aisy lay skty han ky jab first time 
// mera Component mount hoga or render hoga UI par to sab sy phely mera Constructor method run ho ga or console my Constructor milay ga isi 
// trha phr mera render method call hota hay to mujhy console my RENDER mily ga. To first time jab bhe component render hoga to componentDidUpdate
// ky method my likha kuch bhe mujhy console my nahe dekhy ga, means that 1st time par component render hony par yah method call nahe hoga. 

// To phr componentDidUpdate wala method kab chaly ga ? 
// Yah method sirf tab chaly ga jab mery STATE/PROPS ki value update hongi to check karo ap my ny aik button banaya hay counter name ka jab 
// bhe my counter ky button par click karo ga to mera Component to rerender hoga taky updated UI mujhy dekhay or sath hi my mera 
// componentDidUpdate wala method bhe call hoga or hamey console my componentDidUpdate likha mil gy ga har bari state ki value change hony par.

// -------------------------------------------------------------------------------------------------------------------------------------------


// Q3) ComponentDidUpdate Kab call nahe hoga ? 
// ComponentDidUpdate Component mount/banay par, koi cheez ready hony par yah method call nahe hoga. 


// Q4) Kia ComponentDidUpdate method ky andar STATE/PROPS ko update karwa skty han ?
// G bilkul karwa skty han magar karwana nahe chaihyee kiu ky agar ham ny state update karwa di iss method ky andar to yah infinite loop my 
// chala gy ga or error aagy ga infinite loop ka. Uss ki wjah kuch aisi hay ky behind the seen mechanism smjhna pary ga hamey dekho agar state
// kar di iss method ky andar to hamara Component dobara sy render hoga or Component ky render hony ky foran baad yah method phr dobara sy call 
// hogy ga phr iss trha hamara code infinite loop my chala gy ga. Issi liye hamesha conditonally STATE/PROPS ko update karwanay ky liye iss 
// method ko use karna chaihyee. inshaALLAH baki kal

// Q4) componentDidUpdate ka kya use hai kis liye use hota hay?
// "ComponentDidUpdate state ya props update hone ke baad call hota hai, aur hum isse API calls, DOM updates, ya comparison logic ke liye use 
// karte hain."

// "Functional components mein componentDidUpdate ki jagah useEffect hook ka use karte hain, jo state ya props update hone ke baad 
// side effects handle karta hai."

// Yeh method mostly 3 purposes ke liye use hota hai:
// State change ke baad API call karna.
// Previous state ya props ko current state ya props ke sath compare karke kuch logic lagana.
// DOM manipulation karna (jo React ke render method se possible na ho).

// Code example: (My iss code conditonally user's UI render karwa rha hon har count ki value change hony par yaad rahy 10 count sy agy user
//  ka date ui par show nahe hoga )

class ComponentDidUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userData: null, // Initialize userData in state
    };
  }

  async componentDidUpdate(prevProps, prevState) {
    // Check if the state.count has changed
    if (prevState.count !== this.state.count){
    
    if(this.state.count > 10){
        alert("No more user data Api users limit reached !")
        return false
    }
      try {
        // Fetch new user data based on updated count
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${this.state.count}`);
        const data = await response.json();
        
        // Only update the state if the data is different
        if (data.id !== this.state.userData?.id) {
          this.setState({ userData: data });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  }

  render() {
    const { userData } = this.state;
    return (
      <div>
        <h2>User Profile</h2>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Counter
        </button>

        {userData ? (
          <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default ComponentDidUpdate;
