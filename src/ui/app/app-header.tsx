import React, { FC } from "react"
import { Layout } from "antd"

export const AppHeader: FC = () => {
    return (
        <Layout.Header>
            <h1 style={{ color: "white" }}>Lorien Trust Spell List Generator</h1>
        </Layout.Header>
    )
}
