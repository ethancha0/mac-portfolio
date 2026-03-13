import { MailIcon } from "lucide-react"
import github from "/icons/github.svg"
import instagram from "/icons/instagram.svg"
import linkedin from "/icons/linkedin.svg"

const ContactCards = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-96 p-6">

    <a href="https://github.com/ethancha0" target="_blank" rel="noopener noreferrer">
        <div className="relative bg-amber-400 h-32 rounded-3xl hover:brightness-110 transition">
            
                <img src={github} alt="icon" className="absolute top-4 p-1 left-3"/>
                <p className="absolute bottom-4 left-3 font-bold text-white">Github</p>                
        </div>
    </a>

    <a href="https://www.linkedin.com/in/ethanchaoo" target="_blank" rel="noopener noreferrer">
        <div className="relative bg-blue-400 h-32 rounded-3xl hover:brightness-120 transition">
            <img src={linkedin} alt="icon" className="absolute top-4 p-1 left-3"/>
            <p className="absolute bottom-4 left-3 font-bold text-white">LinkedIn</p>        
        </div>
    </a>

    <a href="mailto:ethanwchao1@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className="relative bg-green-400 h-32 rounded-3xl hover:brightness-110 transition">
            <MailIcon className="text-white absolute top-4 p-1 left-3" size={30}/>
            <p className="absolute bottom-4 left-3 font-bold text-white">Email</p>        
        </div>
    </a>

    <a href="https://www.instagram.com/ethanchaoo/?hl=en" target="_blank" rel="noopener noreferrer">
        <div className="relative bg-purple-400 h-32 rounded-3xl hover:brightness-110 transition">
            <img src={instagram} alt="icon" className="absolute top-4 p-1 left-3 h-8"/>
            <p className="absolute bottom-4 left-3 font-bold text-white">Instagram</p>        
        </div>
    </a>

</div>
  )
  
}

export default ContactCards
