import { ISpellSkillState } from "../interface/spell-skill-state"
import React from "react"

export interface ISpellSkillContext {
    spellSkillState: ISpellSkillState
    setSpellSkills: (newState: ISpellSkillState) => void
    resetSpellSkills: () => void
}

export interface ISpellSkillProvider {
    spellSkills: ISpellSkillState
    children: React.ReactNode
}

export interface IPrintModeProvider {
    printMode: boolean
    children: React.ReactNode
}
