import { useState } from 'react';
import logo from '../images/reactimg.svg'
import Header from '../components/Header';
import Header2 from '../components/Header2';


export default function Navbar() {
    let [main, setmain] = useState(<Header />)
    function changeMode() {
        setmain(prevState => prevState = <Header2 />)
    }


    return (
        <>
        <div className="navbar">
            
            <div className="h122">
            <img src={logo} alt="react logo" className='img'/>
            <h1 className='heading1'>ReactFacts</h1></div>
            <div className="togglebutton">
                <div>Light</div>
            <div className="toggle"><label className="switch">
            <input onClick={changeMode} type="checkbox" />
          <span className="slider round"></span></label> </div>
          <div>Dark</div>
                        
                        </div>

        </div>
        {main}
        </>
    )
}