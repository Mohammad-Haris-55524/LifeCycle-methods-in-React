import './App.css'
import BasicsOfLifeCycleMethods from './components/BasicsOfLifeCycleMethods'
import Constructor from './components/Constructor'
import Render from './components/Render'
import ComponentDidMount from './components/ComponentDidMount'
import ComponentDidUpdate from './components/ComponentDidUpdate'
import ShouldComponentUpdate from './components/ShouldComponentUpdate'
import GetSnapshotBeforeUpdate from './components/getSnapshotBeforeUpdate'
import { useState } from 'react'

function App() {
const [userName, setUserName] = useState('Mohammad')
return (
<>
{/* <BasicsOfLifeCycleMethods/> */}
{/* <Constructor/> */}
{/* <Render/> */}

{/* <ComponentDidMount/> */}
{/* <ComponentDidUpdate/> */}
{/* <ShouldComponentUpdate/> */}
<GetSnapshotBeforeUpdate name={userName}/>
<button onClick={()=>setUserName("Mohammad Haris")}>Change name</button>
</>
  )
}

export default App
