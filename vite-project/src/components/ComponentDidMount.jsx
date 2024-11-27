import React, { Component, StrictMode } from 'react'
import Constructor from './Constructor'

export class ComponentDidMount extends Component {
constructor(){
    super()
    this.state={
        count: 0,
        name : "Zain ahmed khan"
    }
console.log("Constructor method")
}
componentDidMount(){
    console.log("ComponentDidMount method")
} 
countHandler(){
 this.setState({count: this.state.count+ 2})   
}
nameChangeHandler(){
this.setState({name: "Mohammad haris"})
}
  render() {
    console.log("Render method");
    return(
    <>
    <h2>ComponentDidMount Method | Life Cycle methods</h2>
    <button onClick={() => this.countHandler()} >Counter {this.state.count}</button>
    <button onClick={()=>this.nameChangeHandler()}>{this.state.name}</button>
    
    </>
    )
  }
}

export default ComponentDidMount

// ComponentDidMount hamara life cycle method hay MOUNTING PHASE ka. Iss ka mtlb yah hay ky jab koi cheez born hoti hay 
// yah phr my REACT ki baat karo to jab hamara Component MOUNT hota hay means ky born hota hay 1st time par to tab hamara 
// yah method call hota hay. Ab iss sy 1 sawal banta hay ky bhai ham ny to parha tha ky hamara CONSTRUCTOR method bhe 
// call hota hay ? Yaad rahy Constructor method hamara Component banty hi sab sy sab sy phely call hota hay. Phr ham ny 
// dekha tha ky CONSTRUCTOR method ky foran baad hamara jo method call hota hay woh hamara RENDER METHOD hota hay.
// Ab ham jo parh rahy han uss method ka name ComponentDidMount hay iss ky name sy hi hamey pta chal raha hy ky tab call
// hona hay jab Component pory tarikay sy MOUNT hogy means ky jab hamari CSS LOAD ho gy hamara DOM pora create hogy or 
// HTML structure ready hogy or jab hamara pora Component ready hogy tab hamara ComponentDidMount wala method call hota hay.

// // Q1) Difference b/w ComponentDidMount method vs Constructor method
// Constructor method hamara sab sy phely call hony wala method hay MOUNTING PHASE ka. Jab mera HTML READy bhe nahe hota tab
// hamara yah method call hojata hay 
// ComponentDidMount tab call hota hay jab hamara HTML STRUCTURE, css, DOM sab ready hojata hay or hamara Component complete 
// tarikay sy MOUNT hojata hay yah phr ready hojati hay phr iss ky baad hamara ComponentDidMount wala method call hota hay 

// // Q2) Kia STATE/PROPS ky update hony par ComponentDidMount method dobara sy call hota hay har update par ?
// No, hamari STATE/PROPS ky update hony par ComponentDidMount method par koi farq nahe parta. Yah method sirf 1 aik hi bar 
// call hota hay jab hamara pora component complete Mount hota hay dobara yah phr bar bar har update par call nahe hota.

// // Q3) RENDER METHOD yah ComponentDidMount method phely konsa method call hota hay ?
// RENDER METHOD phely call hota hay ComponentDidMount method baad my call hota hay. Uss ki wjah yah hay ky RENDER METHOD
// hi hamari HTML ky structure ko ready karta hay or HTML ko lay kar ata hay Document ky andar  

// ComponentDidMount method tb call hota hay jab sari chezain ready hojati han phr uss ky baad call hota hay. Jab hamara
// component complete Mount hojata hay to uss ky baad hamara ComponentDidMount method call hota hay

// ---------------------------------------------------------------------------------------------------------------------
// Q4) ComponentDidMount method my use kiu karo ga yah iss my kia kaam karwa skta hon ? Koi 1 example do ...

// ComponentDidMount method ziada tar API CALLING ky liye use hota hay. 

// API call kabhe bhe Constructor / RENDER METHOD my kabhe bhe nahe karwana kiu ?
// Constructor method to sab sy phelay hi call hogy ga jab my iss my API CALL karwa dn ga to hamey pta hay ky API ki 
// dependecy HTML STRUCture par hoti hay jab hamey pta hay ky jab hamara Constructor method call hota hay to tab tak to 
// html structure ready/load hi nahe howa hoga to ham API ka result UI par show kesy karwayen gy.

// RENDER METHOD my bhe API CALL nahe karwayen gy kiu ky render method to har state/props update hony par call hojata hy
// to my kabhe bhe nahe chaho ga ky har update par meri API par call chali gy. Kiu ky hamara maqsad hota hay ky API par
// call sirf tab gy jab hamara component complete ready/MOUNT ho uss ky baad hi API call ho to uss ky liye my ComponentDidMount
// ka method use karo ga for API CALLING. 

// ----------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------ <StrictMode> -------------------------------------------------------
// Kia <StrictMode> use karna chaihyee yah nahe karna chaihyee or agar karna chaihyee to kiu  ?

// Jesy JS my strict mode hota hay bilkul wesy hi REACT my bhe <StrictMode> hota hay.
{/* <StrictMode> hamari kabhe bhe UI kharab nahe kary ga
Isy zarror use karna chaihyee expicially har acha developer bolta hay ky hamey issy zarror use karna chaihyee or jab ap
bary project par kaam kar rahy hon to ho skta hay ham code likhty howy koi cheez REACT ki guidelines ky against kar dein
to yah CONSOLE my warning message show kara deta hay ky yah ap REACT ki guidelines ky against jaa rhay ho  */}

// Ab Iss sy aik or sawal banta hay ky kia iss strict mode ka WARNING MEESAGE / ERROR UI par show hota hay yah nahe ? 
// StrictMode ki warning message sirf console my show hota hay. Yah hamari UI BLOCK nahe karta. 

{/* <StrictMode> check karta hay ky REACT ki guidelines ko follow kiya jaa raha hay yah nahe to issi liye yah kuch methods
ko twice bar call karwata hay unhi methods my sy aik method componentDidMount method bhe hota hay issy bhe yah twice
time check karta hay ky yah REACT ki guidelines ko sahe sy follow kar raha hy yah nahe  */}