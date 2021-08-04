import { FC } from "react"
import { Layout, Space } from "antd"

export const SidePanel: FC = ({ children }) => {
    const { Sider } = Layout

    return (
        <Sider theme="light" width={260} style={{ padding: "18px" }}>
            <Space direction="vertical" align="end" className="sider-space">
                {children}
            </Space>
        </Sider>
    )
}
