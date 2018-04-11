import React from "react";

class PhotoMenu extends React.Component {
    render() {
        const photoArr = [
            "https://bit.ly/2Gy7BzW",
            "https://bit.ly/2E3DqOZ",
            "https://bit.ly/2GtjxqS",
            "https://bit.ly/2pZPJa4",
            "https://bit.ly/2GuOD19",
            "https://bit.ly/2Gv5EEn"
        ];
        const photos = photoArr.map(photo => (
            <img
                className="photo-button"
                src={photo}
                id={photo}
                key={photo}
                alt="background from Unsplash"
                onClick={this.props.changeBackground}
            />
        ));
        return (
            <div className="board-menu">
                <div className="board-menu-title">
                    <span className="back" onClick={this.props.showBackgroundMenu}>
                        <i className="fas fa-arrow-left back" />
                    </span>
                    <h3>{this.props.menuTitle}</h3>
                    <span className="close" onClick={this.props.toggleBoardMenu}>
                        <img src="images/close-round.png" alt="close" />
                    </span>
                </div>
                <div className="menu-body">{photos}</div>
            </div>
        );
    }
}

export default PhotoMenu;
