
import group from "../images/reactjs.png"


export default function Header(props) {
    return (
        <div className={props.darkMode ? "darkheader" : "header1"}>
            <h1 className="heading3">Fun Facts about React</h1>
            <ul>
            <li className="heading44">Was first released in 2013</li>
            <li className="heading5">Was originally created by Jordan Walke</li>
            <li className="heading6">Has well over 100K stars on Github</li>
            <li className="heading7">Is maintained by Facebook</li>
            <li className="heading8">Powers thousands of enterprise apps, including mobile apps</li></ul>
            <img src={group}  className="logoimg" alt="" />
        </div>
    )
}