import React, { FC, useState } from "react"
import { Layout, Space } from "antd"
import { CollapseIcon } from "../icons/collapse-icon"

export const SidePanel: FC = ({ children }) => {
    const { Sider } = Layout
    const [isCollapsed, setCollapsed] = useState(false)

    return (
        <>
            <Sider
                collapsible
                collapsed={isCollapsed}
                onCollapse={setCollapsed}
                defaultCollapsed={false}
                theme="light"
                width={260}
                collapsedWidth={0}
                trigger={<CollapseIcon collapsed={isCollapsed} />}
            >
                <Space
                    direction="vertical"
                    align="end"
                    className="sider-space"
                    style={{ padding: "18px", width: "260px" }}
                >
                    {children}
                </Space>
            </Sider>
        </>
    )
}
