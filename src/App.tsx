import Dock from './components/Dock'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import Finder from './windows/Finder';
import Terminal from './windows/Terminal';
import ImageFile from './windows/ImageFile';
import DesktopApps from './components/DesktopApps';
import Contact from './windows/Contact';
import Safari, { ExperienceSafariWindow, LeadershipSafariWindow } from './windows/Safari';

const App = () => {
  return (
    <div>
  

      <Navbar/>
      <Welcome/>
      <Dock/>
      <DesktopApps/>
      

      <Terminal/>
      <Safari/>
      <ExperienceSafariWindow/>
      <LeadershipSafariWindow/>

      <Finder/>
      <ImageFile/>
      <Contact/>


    </div>
  )
}

export default App
