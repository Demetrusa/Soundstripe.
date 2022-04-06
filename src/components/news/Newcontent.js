import React from "react";
import TextContent from "../text-content/TextContent";
import  "./Newcontent.css"

const Newcontent = () => {
    return (
        <div className="newsInfo">
            <div className="newsContent">
                <div className="circle"></div>
                <h2>სიახლეები</h2>
            </div>
            <div className="content-Boxes">
                <TextContent />
                <TextContent />
                <TextContent />
            </div>
            <div className="moreRead">
                <button className="btn3">მეტის ნახვა</button>
            </div>
        </div>
    )
}

export default Newcontent;