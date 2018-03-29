import React from "react";

class PhotoMenu extends React.Component {
    render() {
        const photoArr = ["https://bit.ly/2Gvf6uT", "https://bit.ly/2E3DqOZ",
            "https://bit.ly/2J27L4h", "https://bit.ly/2E3zu0D", "https://bit.ly/2GUaxIa", "https://bit.ly/2pRHwoa"];
        const photos = photoArr.map((photo) => (<img className="photo-button"
         src= {photo} id={photo} key={photo} alt="background from Unsplash" onClick={this.props.changeBackground}/>));
        return (
            <div className="board-menu">
                <div className="board-menu-title"><span className="back"
                    onClick={this.props.showBackgroundMenu}>
                    <i className="fas fa-arrow-left back"></i></span><h3>{this.props.menuTitle}</h3>
                    <span className="close" onClick={this.props.toggleBoardMenu}>
                        <img src="../close-round.png" alt="close" /></span>
                </div>
                <div className = "menu-body">
                {photos}
                </div>
            </div>
        );
    }
}

export default PhotoMenu;