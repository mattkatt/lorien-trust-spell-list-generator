import { spells } from "../data/spells"
import { ISpellLists, spellLists } from "../data/spell-lists"
import { ISpell, List } from "../interface/spells"
import { ISpellSkillState } from "../interface/spell-skill-state"

interface ISpellService {
    generateSpellList: (spellSkills: ISpellSkillState) => ISpellLists
}

const determineIncantationLists = (state: ISpellSkillState): Array<List> => {
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

const determineSpellcastingList = (state: ISpellSkillState): Array<List> => {
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

const sortSpells = (spells: Array<ISpell>): Array<ISpell> => {
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

        if (spellSkills.healing > 0) {
            combinedSpellList["1"].push(...spellLists.healing["1"])

            if (spellSkills.healing > 1) {
                combinedSpellList["2"].push(...spellLists.healing["2"])

                if (spellSkills.highMagic) {
                    combinedSpellList["3"].push(...spellLists.healing["3"])
                }
            }
        }

        if (spellSkills.corruption > 0) {
            combinedSpellList["1"].push(...spellLists.corruption["1"])

            if (spellSkills.corruption > 1) {
                combinedSpellList["2"].push(...spellLists.corruption["2"])

                if (spellSkills.highMagic) {
                    combinedSpellList["3"].push(...spellLists.corruption["3"])
                }
            }
        }

        if (spellSkills.incantation > 0) {
            const incantList = determineIncantationLists(spellSkills)

            for (let list of incantList) {
                combinedSpellList["1"].push(...spellLists[list]["1"])

                if (spellSkills.incantation > 1) {
                    combinedSpellList["2"].push(...spellLists[list]["2"])

                    if (spellSkills.highMagic) {
                        combinedSpellList["3"].push(...spellLists[list]["3"])
                    }
                }
            }
        }

        if (spellSkills.spellcasting > 0) {
            const mageList = determineSpellcastingList(spellSkills)

            for (let list of mageList) {
                combinedSpellList["1"].push(...spellLists[list]["1"])

                if (spellSkills.spellcasting > 1) {
                    combinedSpellList["2"].push(...spellLists[list]["2"])

                    if (spellSkills.highMagic) {
                        combinedSpellList["3"].push(...spellLists[list]["3"])
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

        if (levelOne && spellSkills.daemonology) {
            combinedSpellList["1"].push(...spellLists.daemonology["1"])

            if (levelTwo) {
                combinedSpellList["2"].push(...spellLists.daemonology["2"])

                if (spellSkills.highMagic || spellSkills.highDaemonology) {
                    combinedSpellList["3"].push(...spellLists.daemonology["3"])
                }
            }
        }

        if (levelOne && spellSkills.elementalism) {
            combinedSpellList["1"].push(...spellLists.elementalism["1"])

            if (levelTwo) {
                combinedSpellList["2"].push(...spellLists.elementalism["2"])

                if (spellSkills.highMagic || spellSkills.highElementalism) {
                    combinedSpellList["3"].push(...spellLists.elementalism["3"])
                }
            }
        }

        if (levelOne && spellSkills.necromancy) {
            combinedSpellList["1"].push(...spellLists.necromancy["1"])

            if (levelTwo) {
                combinedSpellList["2"].push(...spellLists.necromancy["2"])

                if (spellSkills.highMagic || spellSkills.highNecromancy) {
                    combinedSpellList["3"].push(...spellLists.necromancy["3"])
                }
            }
        }

        if (levelOne && spellSkills.theology) {
            combinedSpellList["1"].push(...spellLists.theology["1"])

            if (levelTwo) {
                combinedSpellList["2"].push(...spellLists.theology["2"])

                if (spellSkills.highMagic || spellSkills.highTheology) {
                    combinedSpellList["3"].push(...spellLists.theology["3"])
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
