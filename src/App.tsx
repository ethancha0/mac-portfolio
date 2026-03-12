import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Finder from './windows/Finder';
import Resume from './windows/Resume';
import Safari from './windows/Safari';

import Terminal from './windows/Terminal';
import ImageFile from './windows/ImageFile';

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
      <ImageFile/>


    </div>
  )
}

export default App
