
//  --------------------------------------------------------------- Pure Function -----------------------------------------------------------
// Definition:
// A pure function woh hoti hai jo: Har dafa same inputs par same output deti hai.Apne function ke bahar kisi bhi state ya variable ko modify 
// nahi karti.Koi side effects nahi hotay (e.g., DOM manipulation, API call, logging, etc.).

// Characteristics:
// 1) Predictable hoti hai.
// 2) React mein render() function pure hona chahiye kyun ke uska kaam sirf JSX return karna hai.
// 3) Functional components ke liye yeh ek achi practice hai kyun ke woh ek specific input (props) ke basis par hi output (JSX) generate karte hain.

// Example:
// function add(a, b) {
//     return a + b; // Ye har dafa same inputs par same result dega
//   }

//   const MyComponent = (props) => {
//     return <h1>Hello, {props.name}</h1>; // Ye ek pure function hai
//   };

  
// -------------------------------------------------------------------- Impure Function -------------------------------------------------------
// Definition:
// An impure function woh hoti hai jo: Function ke bahar ki kisi state ya variable ko modify karti hai. Har dafa same inputs par same output 
// nahi deti. Side effects produce karti hai, jaise DOM ko modify karna, API call karna, ya console logs likhna.

// Characteristics:
// 1) Unpredictable ho sakti hai.
// 2) React mein lifecycle methods ya event handlers impure ho sakte hain, jaise API calls ya state changes ke liye.
// 3) Performance optimize karna mushkil ho sakta hai.

// Example # 01:
// let count = 0;
// function increment() {
//   count += 1; // Function ke bahar ke variable ko modify kar raha hai
//   return count;
// }

// Example # 02:
// const ImpureComponent = (props) => {
//     console.log("Rendering Impure Component"); // Side effect: Console log
//     return <h1>Hello, {props.name}</h1>;
//   };

//  -----------------------------------------------------------------------------------------------------------------------------------------

//  React mein Use Cases:

// 1. Pure Functions:
// Pure functions ko functional components mein use karte hain, kyun ke woh predictable aur easily testable hoti hain.
// Redux mein reducers hamesha pure functions hone chahiye.

// function reducer(state, action) {
//     switch (action.type) {
//       case "INCREMENT":
//         return { ...state, count: state.count + 1 }; // Pure
//       default:
//         return state;
//     }
//   }

  
//  2. Impure Functions:
// State updates, side effects, ya DOM manipulations ke liye impure functions kaam karti hain.
// For example, useEffect ke andar API calls ya logging karte hain, jo impure hota hai.
// javascript
// Copy code


// useEffect(() => {
//     fetchData(); // Impure: API call
//   }, []);
  


// Conclusion:
// React mein functional components aur Redux reducers ko pure functions ke tarah likhne ki koshish karni chahiye. Impure functions ko 
// controlled environments, jaise useEffect, event handlers, ya lifecycle methods ke andar use karna chahiye.