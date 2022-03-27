import React from "react";
import Hand from "./Hand";
import { useContext, useState, useEffect } from "react";
import { PageStatusContext } from "./providers/PageStatusProvider";



const HandDiv = () => {
    const {Status, ChangePageStatus} = useContext(PageStatusContext)

    const [myHand, selectmyHand] = useState("goo")
    
    const [oppHand, selectOppHand] = useState("goo")

    const [result, calResult] = useState(0)

    const [isChange, setChange] = useState(false)

    const Judge = (myHands, oppHands) => {
        // Goo

        console.log(myHands, oppHands)
        if (myHands === "goo")  {
            // Goo
            if (oppHands === "goo"){
                calResult(0)
            } else if (oppHands === "choki") { /*Choki*/
                calResult(1)
            } else { /*Par*/
                calResult(2)
            }
        } else if (myHands === "choki") { /*Choki*/
            if (oppHands === "goo") {  /*Goo*/
                calResult(2)
            } else if (oppHands === "choki") { /*Choki*/
                calResult(0)
            } else {  /* Par */
                calResult(1)
            }
        } else {  /*Par*/
            if (oppHands === "goo") { /* Goo */
                calResult(1)
            } else if (oppHands === "choki") { /* Choki */
                calResult(2)
            } else {  /* Par */
                calResult(0)
            }
        }
    } 

    const selectHand = (hand) => {
        const oppHandNum = Math.floor( Math.random() * 3 );
        var opphand = "par";
        if (oppHandNum === 0) {
            opphand = "goo";
        } else if (oppHandNum === 1) {
            opphand = "choki";
        } else {
            opphand = "par";
        }

        selectmyHand(hand)
        selectOppHand(opphand)
        Judge(hand, opphand)
        setChange(true)
    }

    var showTime;

    const showResult = () => {
        ChangePageStatus((prev) => {
            console.log(prev)
            if (prev === 4) {
                clearInterval(showTime)
                setChange(false)
                return prev + result  + 1
            }
            return prev + 1
        }) 
    }

    useEffect(() => {
        console.log("effect")
        console.log(isChange)
        if (isChange) {
            showTime = setInterval(showResult, 1500)
            console.log(myHand,oppHand)}
        },
        [isChange]
    )

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
            <Hand hand = {oppHand}></Hand>
        </div>
    }
}

export default HandDiv;