import React, { FC } from "react"
import { Divider } from "antd"

interface ISpellDividerProps {
    hidden: boolean
}

export const SpellDivider: FC<ISpellDividerProps> = ({ hidden }) => {
    if (hidden) {
        return null
    }

    return <Divider type="vertical" orientation="center" style={{ height: "auto" }} />
}
