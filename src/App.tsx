import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Safari from './windows/Safari';

import Terminal from './windows/Terminal';

const App = () => {
  return (
    <div>
  

      <Navbar/>
      <Welcome/>
      <Dock/>

      <Terminal/>
      <Safari/>


    </div>
  )
}

export default App
