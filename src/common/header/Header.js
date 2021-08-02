import React  from 'react';
import "./Header.css";
import ReactLogo from './logo.svg';



class Header extends React.Component{
    render(){
        return(
            <div className="headerStyle">
<div><img src={ReactLogo} alt="React Logo" className="logoStyle" /></div>
            </div>
        )
    }
}
export default Header;