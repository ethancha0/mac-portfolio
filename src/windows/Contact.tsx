import ContactCards from "../components/ContactCards"
import WindowControls from "../components/WindowControls"
import WindowWrapper from "../hoc/WindowWrapper"
import headshot from "/public/images/headshot.jpeg"

const Contact = () => {
  return (
    <div>
        <div id="window-header">
            <WindowControls target="contact"/>
        </div>

        <div className="bg-white flex w-max">
            <div className="flex flex-col items-center justify-center p-10">
                <img 
                    src={headshot} 
                    alt="headshot"
                    className="w-30 h-30 rounded-full" 
                    />

                <h1 className="font-bold mt-4 mb-7 text-xl whitespace-nowrap">Lets make something happen.</h1>
            </div>


            <ContactCards/>

        </div>


    </div>
  )
}


const ContactWindow = WindowWrapper(Contact, "contact")
export default ContactWindow
