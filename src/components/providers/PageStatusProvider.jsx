import { createContext, useState } from "react";


export const PageStatusContext = createContext({});

export const PageStatusProvider = (props) => {
    const { children } = props;
    console.log("provider")
    console.log(children)
    const [Status, ChangePageStatus] = useState(0);
    console.log(Status)
    return (
        <PageStatusContext.Provider value={{Status, ChangePageStatus}}>
            {children}
        </PageStatusContext.Provider>
    )
}