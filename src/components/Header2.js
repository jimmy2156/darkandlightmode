import group1 from "../images/group.png"


export default function Header2() {
    return (
        <div className="header2">
            <h1 className="heading4">Fun Facts about React</h1>
            <ul className="ul2">
            <li className="heading5">Was first released in 2013</li>
            <li className="heading5">Was originally created by Jordan Walke</li>
            <li className="heading6">Has well over 100K stars on Github</li>
            <li className="heading7">Is maintained by Facebook</li>
            <li className="heading8">Powers thousands of enterprise apps, including mobile apps</li></ul>
            <img src={group1}  className="logoimg1" alt="" />
        </div>
    )
}