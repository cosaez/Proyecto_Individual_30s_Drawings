import React from "react";

const PresetThumbnail = (props) => {
    return (
            <div className="thumbnail-container" onClick={(e) => { e.target.border = '1px outset green'; console.log("You've selected an image") }}>
                    <img src={props.pic} className="thumbnail" onClick={(e) => { props.select(props.pic) }} />
                </div>
    )
}

export default PresetThumbnail;