import React, { useEffect, useState } from "react";
import "./styles.modules.css";


const Number = (props) => {
    const [styleObj, setStyleObj] = useState({
        color: "black",
        backgroundColor: "white",
    });

    const checkurl = () => {
        if (props.backcolor) {
            setStyleObj({...styleObj, backgroundColor : props.backcolor, color : props.textcolor})
            console.log(styleObj)
            console.log(props.backcolor)
        } else if (props.textcolor) {
            setStyleObj({...styleObj, color : props.textcolor})
        } 
    }

    useEffect(() => {
        checkurl()
    }, [] )

    return (
        <div className="picker">
            {props.backcolor}
            {props.textcolor}
            {!isNaN(props.input) ? (
                <p> The number is: {props.input} </p>
            ) : (
                <p style={styleObj}> The word is: {props.input} </p>
            )}
        </div>
    );
};

export default Number;
