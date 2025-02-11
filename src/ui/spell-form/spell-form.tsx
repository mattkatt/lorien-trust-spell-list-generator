import React, { FC, useContext, useEffect } from "react"
import { Form } from "antd"

import { FormRadio } from "./spell-form-radio"
import { FormSwitch } from "./spell-form-switch"
import { spellFormHelpers } from "./spell-form-helpers"
import { ISpellSkillState } from "../../interface/spell-skill-state"
import { capitalize } from "../../helpers/helpers"
import { SpellSkillContext } from "../../context/spell-skill-context"

export const SpellForm: FC = () => {
    const { spellSkillState, setSpellSkills } = useContext(SpellSkillContext)
    const [form] = Form.useForm<ISpellSkillState>()

    useEffect(() => {
        form.setFieldsValue(spellSkillState)
    }, [form, spellSkillState])

    const onFormChange = () => setSpellSkills(form.getFieldsValue())

    const radioNames: Array<keyof ISpellSkillState> = [
        "incantation",
        "spellcasting",
        "healing",
        "corruption",
        "ritual",
    ]

    const switchNames: Array<keyof ISpellSkillState> = [
        "highCounter",
        "highMagic",
        "lightIncantation",
        "darkIncantation",
        "castAdditionalIncantation",
        "castAllIncantation",
        "enchanting",
        "shadowMagic",
        "castAdditionalMagecraft",
        "castAllMagecraft",
        "daemonology",
        "highDaemonology",
        "elementalism",
        "highElementalism",
        "necromancy",
        "highNecromancy",
        "theology",
        "highTheology",
        "performTransportRite",
        "performTeleportRite",
    ]

    return (
        <Form form={form} name="Spell CS/OS" initialValues={spellSkillState} onChange={onFormChange}>
            {radioNames.map((name, index) => (
                <FormRadio key={index} name={name} />
            ))}

            {switchNames.map((name, index) => {
                const hiddenFunc = spellFormHelpers[`is${capitalize(name)}Hidden`]

                if (typeof hiddenFunc !== "function") {
                    throw Error(`"is${capitalize(name)}Hidden" is not a function`)
                }

                return (
                    <FormSwitch
                        key={index}
                        name={name}
                        value={form.getFieldValue(name)}
                        hidden={hiddenFunc(spellSkillState)}
                        onChange={onFormChange}
                    />
                )
            })}
        </Form>
    )
}
