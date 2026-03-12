import WindowControls from '../components/WindowControls'
import { Search } from 'lucide-react'
import WindowWrapper from '../hoc/WindowWrapper'
import {locations} from "../constants/index"
import useLocationStore from '../store/location'
import clsx from 'clsx';
import useWindowStore, { type WindowKey } from '../store/window'


const Finder = () => {
    const {activeLocation, setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();
    const openItem = (item) =>{
        if (item.fileType === "pdf") return openWindow('resume')
        if (item.kind === "folder") return setActiveLocation(item);
        if(['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.hred, "_blank");

        openWindow(`${item.fileType}${item.kind}` as WindowKey, item)
    }


  return (
    <>
    <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon"/>
    </div>

    <div className="bg-white flex h-full">
        <div className="sidebar">
            <div>
                <h3>Favorites</h3>
                <ul>
                    {Object.values(locations).map((item) =>(
                        <li 
                            key={item.id}
                            className={clsx(item.id === activeLocation.id ? "active": "not-active")} 
                            onClick={
                            () => setActiveLocation(item)}>
                                <img src={item.icon} className="w-4" alt={item.name}/>
                                <p className="text-sm font-medium truncate">{item.name}</p>
                            
                        </li>

                    ))}
                </ul>
                <ul>
                    <h3>Work</h3>
                    {locations.work.children.map((item) =>(
                        <li 
                            key={item.id}
                            className={clsx(item.id === activeLocation.id ? "active": "not-active")} 
                            onClick={
                            () => setActiveLocation(item)}>
                                <img src={item.icon} className="w-4" alt={item.name}/>
                                <p className="text-sm font-medium truncate">{item.name}</p>
                            
                        </li>

                    ))}
                </ul>




            </div>
            
        </div>
                <ul className="content">
                    {activeLocation?.children.map((item) =>(
                        <li 
                            key={item.id} 
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>  
    </div>
    

    

    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow
