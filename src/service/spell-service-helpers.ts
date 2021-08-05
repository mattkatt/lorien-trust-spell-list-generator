import { ISpellSkillState } from "../interface/spell-skill-state"
import { ISpell, List } from "../interface/spells"

export const determineIncantationLists = (state: ISpellSkillState): Array<List> => {
    if (state.castAllIncantation) {
        return [List.AllIncantation]
    }

    if (state.castAdditionalIncantation) {
        let lists = [List.Incantation]

        if (state.lightIncantation) {
            lists.push(List.LightIncantation)
        }

        if (state.darkIncantation) {
            lists.push(List.DarkIncantation)
        }

        return lists
    }

    if (state.lightIncantation) {
        return [List.LightIncantation]
    }

    if (state.darkIncantation) {
        return [List.DarkIncantation]
    }

    return [List.Incantation]
}

export const determineSpellcastingList = (state: ISpellSkillState): Array<List> => {
    if (state.castAllMagecraft) {
        return [List.AllSpellcasting]
    }

    if (state.castAdditionalMagecraft) {
        let lists = [List.Spellcasting]

        if (state.enchanting) {
            lists.push(List.Enchanting)
        }

        if (state.shadowMagic) {
            lists.push(List.ShadowMagic)
        }

        return lists
    }

    if (state.enchanting) {
        return [List.Enchanting]
    }

    if (state.shadowMagic) {
        return [List.ShadowMagic]
    }

    return [List.Spellcasting]
}

export const sortSpells = (spells: Array<ISpell>): Array<ISpell> => {
    const sortedSpells = spells.sort((spellOne, spellTwo) => {
        if (spellOne.name < spellTwo.name) {
            return -1
        }

        if (spellOne.name > spellTwo.name) {
            return 1
        }

        return 0
    })

    // Filters duplicate spells
    return Array.from(new Set(sortedSpells))
}
