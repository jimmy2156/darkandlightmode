
import logo from '../images/reactimg.svg'


export default function Navbar(props) {
 

    return (
        
        <div className={props.darkMode ? "darknavbar" : "navbar"}>
            
            <div className="h122">
            <img src={logo} alt="react logo" className='img'/>
            <h1 className='heading1'>ReactFacts</h1></div>
            <div className="togglebutton">
                <div>Light</div>
            <div className="toggle"><label className="switch">
            <input onClick={props.changeMode} type="checkbox" />
          <span className="slider round"></span></label> </div>
          <div>Dark</div>
                        
                        </div>

        </div>
        
        
    )
}