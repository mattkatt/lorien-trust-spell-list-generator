import React, { FC } from "react"
import { Layout } from "antd"

export const AppFooter: FC = ({ children }) => {
    return (
        <Layout.Footer
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
            }}
        >
            {children}
        </Layout.Footer>
    )
}
