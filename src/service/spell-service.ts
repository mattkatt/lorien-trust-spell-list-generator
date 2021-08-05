import { spells } from "../data/spells"
import { ISpellLists, spellLists } from "../data/spell-lists"
import { ISpellSkillState } from "../interface/spell-skill-state"
import { determineIncantationLists, determineSpellcastingList, sortSpells } from "./spell-service-helpers"
import { capitalize } from "../helpers/helpers"
import { ISpellService, TCasting, TChanneling, THighSummons, TSummons } from "./spell-service-interfaces"

export const spellService = (): ISpellService => {
    const generateSpellList = (spellSkills: ISpellSkillState): ISpellLists => {
        const combinedSpellList: ISpellLists = { 1: [], 2: [], 3: [] }
        const levelOne =
            spellSkills.healing > 0 ||
            spellSkills.corruption > 0 ||
            spellSkills.incantation > 0 ||
            spellSkills.spellcasting > 0
        const levelTwo =
            spellSkills.healing > 1 ||
            spellSkills.corruption > 1 ||
            spellSkills.incantation > 1 ||
            spellSkills.spellcasting > 1

        const channelingArray: Array<TChanneling> = ["healing", "corruption"]

        for (let channeling of channelingArray) {
            if (spellSkills[channeling] > 0) {
                combinedSpellList["1"].push(...spellLists[channeling]["1"])

                if (spellSkills[channeling] > 1) {
                    combinedSpellList["2"].push(...spellLists[channeling]["2"])

                    if (spellSkills.highMagic) {
                        combinedSpellList["3"].push(...spellLists[channeling]["3"])
                    }
                }
            }
        }

        const castingArray: Array<TCasting> = ["incantation", "spellcasting"]

        for (let casting of castingArray) {
            if (spellSkills[casting] > 0) {
                let castingList =
                    casting === "incantation"
                        ? determineIncantationLists(spellSkills)
                        : determineSpellcastingList(spellSkills)

                for (let list of castingList) {
                    combinedSpellList["1"].push(...spellLists[list]["1"])

                    if (spellSkills[casting] > 1) {
                        combinedSpellList["2"].push(...spellLists[list]["2"])

                        if (spellSkills.highMagic) {
                            combinedSpellList["3"].push(...spellLists[list]["3"])
                        }
                    }
                }
            }
        }

        if (levelOne && spellSkills.ritual > 0) {
            combinedSpellList["1"].push(...spellLists.ritual["1"])

            if (levelTwo && spellSkills.ritual > 2) {
                combinedSpellList["3"].push(...spellLists.ritual["3"])
            }
        }

        const summonArray: Array<TSummons> = ["daemonology", "elementalism", "necromancy", "theology"]

        for (let summon of summonArray) {
            if (levelOne && spellSkills[summon]) {
                combinedSpellList["1"].push(...spellLists[summon]["1"])

                if (levelTwo) {
                    combinedSpellList["2"].push(...spellLists[summon]["2"])

                    const highVersion = ("high" + capitalize(summon)) as THighSummons

                    if (spellSkills.highMagic || spellSkills[highVersion]) {
                        combinedSpellList["3"].push(...spellLists[summon]["3"])
                    }
                }
            }
        }

        if (spellSkills.highCounter) {
            combinedSpellList["3"].push(spells.highCountermagic)
        }

        if (spellSkills.performTransportRite || spellSkills.performTeleportRite) {
            combinedSpellList["1"].push(spells.transportation)
        }

        if (spellSkills.performTeleportRite) {
            combinedSpellList["3"].push(spells.teleport)
        }

        return {
            1: sortSpells(combinedSpellList["1"]),
            2: sortSpells(combinedSpellList["2"]),
            3: sortSpells(combinedSpellList["3"]),
        }
    }

    return {
        generateSpellList,
    }
}
