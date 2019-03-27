import React from 'react';
import jsonData from "./../components/media.json";
import './../styles/style.scss';
import { withGetScreen } from 'react-getscreen';

class ServiceMedia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MediaList: []
        };
    }

    //Call the React Life cycle hooks for getting the Media List Data and Form the Layout
    componentDidMount() {
        this.setState({ MediaList: jsonData.data });
    }
    //Open the Advertisment Right Hand side
    openNav() {
        document.getElementById("mySidenav").style.width = "381px";
    }
    //Close the Advertisment Right Hand side
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    // Render the Data from Data-Feed Json and display the Responsive UI and UX (Iphone, Ipad, Ipod and Desktop)
    render() {
        //Detect for Mobile UI
        if (this.props.isMobile()) {
            console.log('mobile');
            return (
                <div className="w3-teal">
                    <button className="openNavmobile" onClick={this.openNav}>☰</button>
                    <div className="w3-container">
                        <h1>Bauer Advertising</h1>
                    </div>
    
                    <div id="mySidenav" className="sidenav">
                        <span className="sideClosebtn" onClick={this.closeNav}><img src="https://s3-ap-southeast-2.amazonaws.com/data-bm-digital-prod/sample-ad.jpg" alt="" className="closebtn"></img>&times;</span>
                    </div>
                    <div className="row">
                        {this.state.MediaList.map(media =>
                            <div className="col-md-6" key={media.id}><div className="header" id="myHeader">
                                <h6>{media.contentTitle}<br /> <br /><img src={media.contentImageUrl} alt="" className="imagesmobile"></img><br />{media.contentSummary}</h6>
                            </div>
                                <br />
                            </div>
                        )}
                    </div>
                </div>
            )
        }
        //Detect for Tablet UI
        else if (window.screen.availWidth===768) {
            console.log('Tablet');
            return (
                <div className="w3-teal">
                    <button className="openNavTablet" onClick={this.openNav}>☰</button>
                    <div className="w3-container">
                        <h1>Bauer Advertising</h1>
                    </div>
    
                    <div id="mySidenav" className="sidenav">
                        <span className="sideClosebtn" onClick={this.closeNav}><img src="https://s3-ap-southeast-2.amazonaws.com/data-bm-digital-prod/sample-ad.jpg" alt="" className="closebtn"></img>&times;</span>
                    </div>
                    <div className="row">
                        {this.state.MediaList.map(media =>
                            <div className="col-md-6" key={media.id}><div className="header" id="myHeader">
                                <h6>{media.contentTitle}<br /> <br /><img src={media.contentImageUrl} alt="" className="imagesTablet"></img><br />{media.contentSummary}</h6>
                            </div>
                                <br />
                            </div>
                        )}
                    </div>
                </div>
            )
        }

        //Detect for Desktop.
        else {
            return (
                <div className="w3-teal">
                    <button className="openNav" onClick={this.openNav}>☰</button>
                    <div className="w3-container">
                        <h1>Bauer Advertising</h1>
                    </div>
    
                    <div id="mySidenav" className="sidenav">
                        <span className="sideClosebtn" onClick={this.closeNav}><img src="https://s3-ap-southeast-2.amazonaws.com/data-bm-digital-prod/sample-ad.jpg" alt="" className="closebtn"></img>&times;</span>
                    </div>
                    <div className="overflow">
                    <div className="row">
                        {this.state.MediaList.map(media =>
                            <div className="col-md-6" key={media.id}><div className="header" id="myHeader">
                                <h6>{media.contentTitle}<br /> <br /><img src={media.contentImageUrl} alt="" className="images"></img><br />{media.contentSummary}</h6>
                            </div>
                                <br />
                            </div>
                        )}
                    </div>
                    </div>
                </div>
            )
        }
        
    }
}

export default withGetScreen(ServiceMedia);


