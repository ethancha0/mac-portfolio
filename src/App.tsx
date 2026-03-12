import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Finder from './windows/Finder';
import Resume from './windows/Resume';
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
      <Resume/>
      <Finder/>


    </div>
  )
}

export default App
