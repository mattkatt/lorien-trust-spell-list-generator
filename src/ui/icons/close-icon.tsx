import React, { FC } from "react"
import { CloseCircleOutlined } from "@ant-design/icons"

interface ICloseIcon {
    onClick: () => void
}

export const CloseIcon: FC<ICloseIcon> = ({ onClick }) => {
    return <CloseCircleOutlined style={{ fontSize: "18px" }} onClick={onClick} />
}
