import { createContext, FC, useState } from "react"
import { defaultSpellSkillState, ISpellSkillState } from "../interface/spell-skill-state"

interface ISpellSkillContext {
    spellSkillState: ISpellSkillState
    setSpellSkills: (newState: ISpellSkillState) => void
    resetSpellSkills: () => void
}

export const defaultSpellSkillContext = {
    spellSkillState: defaultSpellSkillState,
    setSpellSkills: () => {},
    resetSpellSkills: () => {},
}

export const SpellSkillContext = createContext<ISpellSkillContext>(defaultSpellSkillContext)

interface ISpellSkillProvider {
    spellSkills: ISpellSkillState
}

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
