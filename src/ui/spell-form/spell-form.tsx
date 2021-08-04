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

    const radioNames: Array<"healing" | "corruption" | "incantation" | "spellcasting" | "ritual"> = [
        "incantation",
        "spellcasting",
        "healing",
        "corruption",
        "ritual",
    ]

    const switchNames = [
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
            {radioNames.map((name) => (
                <FormRadio name={name} state={spellSkillState} />
            ))}

            {switchNames.map((name) => {
                const hiddenFunc = spellFormHelpers[`is${capitalize(name)}Hidden`]

                if (typeof hiddenFunc !== "function") {
                    throw Error(`"is${capitalize(name)}Hidden" is not a function`)
                }

                return <FormSwitch name={name} hidden={hiddenFunc(spellSkillState)} onChange={onFormChange} />
            })}
        </Form>
    )
}
