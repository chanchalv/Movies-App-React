import React from "react";
import Header from "../../common/header/Header";
import "./home.css";
import TitlebarImageList from "../../common/ImageList";
import BasicImageList from "../../common/RegularImage";



class Home extends React.Component{
    render(){
        return(
            <div>
            <Header />
            <div id="title"><span>Upcoming Movies</span></div>
            <TitlebarImageList />
            <div className="flex-container">
           < BasicImageList />
            </div>
            <div className="left"></div>
            </div>
           
        )
    }
}
export default Home;
