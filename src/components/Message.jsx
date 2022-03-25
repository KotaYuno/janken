import React from "react";
import { useContext } from "react";
import { PageStatusContext } from "./providers/PageStatusProvider";

const Message = () => {
    const { Status} = useContext(PageStatusContext);
    if (Status === 0){
         return <p id = "status">手を選んでください</p>
    } else if (Status === 1) {
        return <p id = "status">最初は</p>
    } else if (Status === 2){
        return <p id = "status">グー</p>
    } else if (Status === 3) {
        return <p id = "status">じゃんけん</p>
    } else if (Status === 4) {
        return <p id = "status">ポン！</p>
    } else if (Status >= 5) {
        return <p id = "status">winner : you</p>
    }
}
   

export default Message;