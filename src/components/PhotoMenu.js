import React from "react";

class PhotoMenu extends React.Component {
    render() {
        const photoArr = ["https://bit.ly/2Gvf6uT", "https://bit.ly/2pLqf0N"];
        const photos = photoArr.map((photo) => (<img className="photo-button"
         src= {photo} key={photo} />));
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