import React, { FC } from "react"
import { Layout } from "antd"

interface IAppFooterProps {
    children: React.ReactNode
}

export const AppFooter: FC<IAppFooterProps> = ({ children }) => {
    return (
        <Layout.Footer
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}
            className={"no-print"}
        >
            {children}
        </Layout.Footer>
    )
}
