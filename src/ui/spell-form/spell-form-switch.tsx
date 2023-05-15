import React, { FC } from "react"
import { Form, Switch } from "antd"

import { camelToReadable } from "../../helpers/helpers"

interface IFormSwitchProps {
    name: string
    hidden: boolean
    value: boolean
    onChange: () => void
}

export const FormSwitch: FC<IFormSwitchProps> = ({ name, hidden, value, onChange }) => (
    <Form.Item name={name} label={camelToReadable(name)} hidden={hidden}>
        <Switch onChange={onChange} checked={value} />
    </Form.Item>
)
