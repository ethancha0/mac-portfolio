import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Finder from './windows/Finder';
import Resume from './windows/Resume';


import Terminal from './windows/Terminal';
import ImageFile from './windows/ImageFile';
import DesktopApps from './components/DesktopApps';
import Contact from './windows/Contact';

const App = () => {
  return (
    <div>
  

      <Navbar/>
      <Welcome/>
      <Dock/>
      <DesktopApps/>
      

      <Terminal/>

      <Resume/>
      <Finder/>
      <ImageFile/>
      <Contact/>


    </div>
  )
}

export default App
