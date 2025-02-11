import React, { FC } from "react"

interface SpellDisplayTitleProps {
    children: React.ReactNode
}

export const SpellDisplayTitle: FC<SpellDisplayTitleProps> = ({ children }) => {
    return <h2 style={{ marginLeft: "28px" }}>{children}</h2>
}
