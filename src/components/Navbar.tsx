import { navIcons, navLinks } from '../constants'

import dayjs from "dayjs";

type NavLink = {
  id: number;
  name: string;
  type: string;
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
  return (

    <nav>
        <div>
            <img src="/images/logo.svg"/>
            <p className="font-bold">{title}</p>

            <ul>
                {links.map(({id, name }) => (
                    <li key={id}>
                        <p>{name}</p>

                    </li>
                ))}
            </ul>
        </div>

        <div>
            <ul>
                {icons.map(({id, img})=>(
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
