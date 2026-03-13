

import { locations } from "../constants"
import useWindowStore from '../store/window'
import useLocationStore, {type FinderLocation } from '../store/location'


const DesktopApps = () => {
const {setActiveLocation} = useLocationStore();
const { openWindow } = useWindowStore();


const openItem = (item: typeof locations.work.children[number]) => {
    setActiveLocation(item as FinderLocation);
    openWindow('finder');
};



  return (


    <ul className="fixed inset-0 pointer-events-none  ">
                    {locations.work.children.map((item) =>(
                        <li 
                            key={item.id} 
                            className={`absolute pointer-events-auto ${item.desktopPosition}`}
                            onClick={() => openItem(item)}
                        >
                            <div className="flex-col col-center cursor-pointer ">
                                <img src={item.icon} alt={item.name} />
                                <p className="text-white [text-shadow:_0_0_2px_var(--tw-shadow-color)] [--tw-shadow-color:theme(colors.black)]" 
                                >
                                    {item.name}</p>                                
                            </div>

                        </li>
                    ))}
                </ul>  


  )
}

export default DesktopApps
