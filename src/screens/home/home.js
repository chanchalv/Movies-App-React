import React from "react";
import Header from "../../common/header/Header";
import "./home.css";
import TitlebarImageList from "../../common/ImageList";
import BasicImageList from "../../common/RegularImage";
import MovieFilterCard from "../../common/MovieFilterCard";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div id="title"><span>Upcoming Movies</span></div>
                <TitlebarImageList />
                <div className="flex-container">
                    <div className="left">
                        <BasicImageList />
                    </div>
                    <div id="flex-container-child"> <MovieFilterCard /></div>
                </div>
            </div>

        )
    }
}
export default Home;
