import { createContext, FC, useState } from "react"

import { ISpellSkillContext, ISpellSkillProvider } from "./context-interfaces"
import { defaultSpellSkillState, ISpellSkillState } from "../interface/spell-skill-state"

const defaultSpellSkillContext = {
    spellSkillState: defaultSpellSkillState,
    setSpellSkills: () => {},
    resetSpellSkills: () => {},
}

export const SpellSkillContext = createContext<ISpellSkillContext>(defaultSpellSkillContext)

export const SpellSkillProvider: FC<ISpellSkillProvider> = ({ children, spellSkills }) => {
    const [state, setState] = useState(spellSkills || defaultSpellSkillState)

    const setSpellSkills = (newState: ISpellSkillState) => {
        setState(newState)
    }

    const resetSpellSkills = () => {
        setState(defaultSpellSkillState)
    }

    return (
        <SpellSkillContext.Provider value={{ spellSkillState: state, setSpellSkills, resetSpellSkills }}>
            {children}
        </SpellSkillContext.Provider>
    )
}

export const SpellSkillConsumer = SpellSkillContext.Consumer
