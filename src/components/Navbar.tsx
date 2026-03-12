import { navIcons, navLinks } from '../constants'

import dayjs from "dayjs";
import useWindowStore, { type WindowKey} from '../store/window';

type NavLink = {
  id: number;
  name: string;
  type: WindowKey; 
};

type NavIcon = {
  id: number;
  img: string;
};

type NavbarProps = {
  title?: string;
  links?: NavLink[];
  icons?: NavIcon[];
};

const Navbar = ({
  title = "Ethan's Portfolio",
  links = navLinks,
  icons = navIcons,
}: NavbarProps) => {

  const { openWindow } = useWindowStore();

  return (

    <nav>
        <div>
            <img src="/images/logo.svg"/>
            <p className="font-bold">{title}</p>

            <ul>
                {links.map(({id, name, type }: NavLink) => (
                    <li key={id} onClick={() => openWindow(type)}>
                        <p>{name}</p>

                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {icons.map(({id, img}: NavIcon)=>(
                    <li key={id}>
                        <img src={img} className="icon-hover"
                        alt={`icon-${id}`}/>
                    </li>
                ))}

                <time>{dayjs().format("ddd MMM D h:mm A")} </time>

            </ul>
        </div>

    </nav>




  )
}

export default Navbar
