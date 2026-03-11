import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'

import Terminal from './windows/Terminal';

const App = () => {
  return (
    <div>
  

      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>


    </div>
  )
}

export default App
