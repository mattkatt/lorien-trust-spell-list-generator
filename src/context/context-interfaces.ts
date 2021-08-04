import { ISpellSkillState } from "../interface/spell-skill-state"

export interface ISpellSkillContext {
    spellSkillState: ISpellSkillState
    setSpellSkills: (newState: ISpellSkillState) => void
    resetSpellSkills: () => void
}

export interface ISpellSkillProvider {
    spellSkills: ISpellSkillState
}
