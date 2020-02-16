import React, { useEffect } from "react";
// We almost just want this to be passed in a image object or url and then send out an http request to 
// go retreve and render. In the encap player component. 
function AlbumArt() {
    let canvas = document.getElementById("gradient");
    let img = document.getElementById("cover-art");
    let center_x, center_y;

    useEffect(() => {
        center_x = canvas.width / 2;
        center_y = (canvas.height / 2) - 75;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
   
    }, []);
    

        const { image } = this.props;
    return(
        <img id="cover-art" src={image} alt="album cover art"></img>
    );
}

export default AlbumArt;