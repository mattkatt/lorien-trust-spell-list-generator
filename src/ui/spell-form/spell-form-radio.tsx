import React, { FC, useContext } from "react"
import { Form, Radio } from "antd"

import { ISpellSkillState } from "../../interface/spell-skill-state"
import { camelToReadable } from "../../helpers/helpers"
import { SpellSkillContext } from "../../context/spell-skill-context"

interface IFormRadio {
    name: keyof ISpellSkillState
}

export const FormRadio: FC<IFormRadio> = ({ name }) => {
    const { spellSkillState } = useContext(SpellSkillContext)
    const isRitual = name === "ritual"
    const isRitualDisabled =
        spellSkillState.healing < 1 && spellSkillState.corruption < 1 && spellSkillState.incantation < 1 && spellSkillState.spellcasting < 1

    const levelTwoDisabled = () => {
        if (spellSkillState[name] >= 2 || isRitual) {
            return false
        }

        return spellSkillState.healing >= 2 || spellSkillState.corruption >= 2 || spellSkillState.incantation >= 2 || spellSkillState.spellcasting >= 2
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
