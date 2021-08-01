import React, { FC } from "react"
import { Form, Radio } from "antd"

import { ISpellSkillState } from "../../interface/spell-skill-state"
import { camelToReadable } from "../../helpers/helpers"

interface IFormRadio {
    name: "healing" | "corruption" | "incantation" | "spellcasting" | "ritual"
    state: ISpellSkillState
}

export const FormRadio: FC<IFormRadio> = ({ name, state }) => {
    const isRitual = name === "ritual"
    const isRitualDisabled =
        state.healing < 1 && state.corruption < 1 && state.incantation < 1 && state.spellcasting < 1

    const levelTwoDisabled = () => {
        if (state[name] >= 2 || isRitual) {
            return false
        }

        return state.healing >= 2 || state.corruption >= 2 || state.incantation >= 2 || state.spellcasting >= 2
    }

    if (isRitual && isRitualDisabled) {
        return null
    }

    return (
        <Form.Item name={name} label={camelToReadable(name)}>
            <Radio.Group>
                <Radio.Button value={0}>0</Radio.Button>
                <Radio.Button value={1}>1</Radio.Button>
                <Radio.Button value={2} disabled={levelTwoDisabled()}>
                    2
                </Radio.Button>
                {isRitual ? <Radio.Button value={3}>3</Radio.Button> : null}
            </Radio.Group>
        </Form.Item>
    )
}
