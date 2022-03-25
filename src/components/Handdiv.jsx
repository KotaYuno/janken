import React from "react";
import Hand from "./Hand";
import { useContext, useState } from "react";
import { PageStatusContext } from "./providers/PageStatusProvider";

const HandDiv = () => {
    const {Status, ChangePageStatus} = useContext(PageStatusContext)

    const [myHand, selectMyHand] = useState("goo")

    var showTime;
    const selectHand = (hand) => {
        selectMyHand(hand)
        showTime = setInterval(showResult, 1500)
    }
    const showResult = () => {
        ChangePageStatus((prev) => {
            console.log(prev)
            if (prev === 5) {
                clearInterval(showTime)
            }
            return prev + 1
        }) 
    }

    if (Status <= 1){
        return <div className="handDiv">
                <button className="divItem3" onClick={() => selectHand("goo")}><Hand hand = {"goo"}></Hand></button>
                <button className="divItem3" onClick={() => selectHand("choki")}><Hand hand = {"choki"}></Hand></button>
                <button className="divItem3" onClick={() => selectHand("par")}><Hand hand = {"par"}></Hand></button>  
            </div>
    } else if (Status <= 3){
        return <div className="handDiv">
            <Hand hand = {"goo"}></Hand>
            <Hand hand = {"goo"}></Hand>
        </div>
    } else {
        return <div className="handDiv">
            <Hand hand = {myHand}></Hand>
            <Hand hand = {myHand}></Hand>
        </div>
    }
}

export default HandDiv;