import WindowControls from '../components/WindowControls'
import { Search } from 'lucide-react'
import WindowWrapper from '../hoc/WindowWrapper'
import {locations} from "../constants/index"
import useLocationStore, { type FinderItem, type FinderLocation } from '../store/location'
import clsx from 'clsx';
import useWindowStore, { type WindowKey } from '../store/window'


const Finder = () => {
    const {activeLocation, setActiveLocation} = useLocationStore();
    const {openWindow} = useWindowStore();
    const openItem = (item: FinderItem) =>{
        if (item.kind === "folder" && item.children) return setActiveLocation(item as FinderLocation);
        const file = item;
        if (file.fileType === "webpage") {
            const windowKey =
                file.pageType === "leadership" ? "safariLeadership" : "safariExperience";

            return openWindow(windowKey as WindowKey, file);
        }
        if (file.fileType && ['fig', 'url'].includes(file.fileType) && 'href' in file && file.href)
            return window.open(file.href as string, "_blank");
        openWindow(`${file.fileType}${file.kind}` as WindowKey, file);
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
                            className={clsx(item.id === activeLocation?.id ? "active": "not-active")} 
                            onClick={
                            () => setActiveLocation(item as FinderLocation)}>
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
                            className={clsx(item.id === activeLocation?.id ? "active": "not-active")} 
                            onClick={() => openItem(item)}
                            >
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
                        <div className="cursor-pointer flex-col col-center hover:bg-gray-200 rounded-2xl h-25 w-25">
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>                           
                        </div>

                        </li>
                    ))}
                </ul>  
    </div>
    

    

    </>
  )
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow
