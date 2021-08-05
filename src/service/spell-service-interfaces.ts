import { ISpellSkillState } from "../interface/spell-skill-state"
import { ISpellLists } from "../data/spell-lists"

export interface ISpellService {
    generateSpellList: (spellSkills: ISpellSkillState) => ISpellLists
}

export type TChanneling = "healing" | "corruption"
export type TCasting = "incantation" | "spellcasting"

export type TSummons = "daemonology" | "elementalism" | "necromancy" | "theology"
export type THighSummons = "highDaemonology" | "highElementalism" | "highNecromancy" | "highTheology"
