import React from "react";
import Par from "./Par";
import Goo from "./Goo";
import Choki from "./Choki";


const Hand = (props) => {
    if (props.hand === "choki"){
        return <Choki></Choki>;
    } else if (props.hand === "par") {
        return <Par></Par>
    } else if (props.hand === "goo"){
        return <Goo></Goo>
    }
};

export default Hand;
