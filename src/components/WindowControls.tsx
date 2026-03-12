import useWindowStore from "../store/window";


const WindowControls = ({target}: string) => {
    const { closeWindow } = useWindowStore();


  return (
    <div id="window-controls">
        <div className="close" onClick={() => closeWindow(target)} />
        <div className="minimize"/>
        <div className="maximize"/>
      
    </div>
  )
}

export default WindowControls
