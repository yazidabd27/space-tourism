import { NavLink } from "react-router-dom";

const Navbar = () => {

    const openTab=()=>{
        document.querySelector('.links').classList.add('show');
    }

    const closeTab=()=>{
        document.querySelector('.links').classList.remove('show');
    }
    
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="./assets/shared/logo.svg" alt=""></img>
            </div>
            <div className="line"></div>
            <div className="links">
                <img className="close-icon" src="./assets/shared/icon-close.svg" alt="" style={{display:'none'}} onClick={closeTab}></img>
                <NavLink activeclassname='active' to="/">00 Home</NavLink>
                <NavLink activeclassname='active' to="/destination">01 Destination</NavLink>
                <NavLink activeclassname='active' to="/crew">02 Crew</NavLink>
                <NavLink activeclassname='active' to="/technology">03 Technology</NavLink>
            </div>
            <img src="./assets/shared/icon-hamburger.svg" alt="" className="hamburger-icon" style={{display:"none"}} onClick={openTab}></img>
        </nav> 
    );
}

export default Navbar;