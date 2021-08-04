import React, { FC } from "react"
import { LeftOutlined, RightOutlined } from "@ant-design/icons"

interface ICollapseIcon {
    collapsed: boolean
}

export const CollapseIcon: FC<ICollapseIcon> = ({ collapsed = false }) => {
    const Icon = collapsed ? RightOutlined : LeftOutlined

    return <Icon />
}
