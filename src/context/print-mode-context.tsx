import { createContext, FC, useState } from "react"
import { IPrintModeProvider } from "./context-interfaces"

export const PrintModeContext = createContext<boolean>(false)

export const PrintModeProvider: FC<IPrintModeProvider> = ({ children }) => {
    const [state, setState] = useState(false)

    const setPrintMode = (newState: boolean) => {
        setState(newState)
    }

    return <PrintModeContext.Provider value={state}>{children}</PrintModeContext.Provider>
}

export const PrintModeConsumer = PrintModeContext.Consumer
