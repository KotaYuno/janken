import React from "react";
import { useContext } from "react";
import { PageStatusContext } from "./providers/PageStatusProvider";

const ReturnButton = () => {
    const {Status, ChangePageStatus} = useContext(PageStatusContext)
    var isVisible = false;
    if (Status >= 5) {
        isVisible = true
    }

    const returnFirst = () => {
        ChangePageStatus(() => 0);
        isVisible = false;
    }
    return <button disabled={!isVisible} onClick={returnFirst}>もう一戦する</button>
}

export default ReturnButton;