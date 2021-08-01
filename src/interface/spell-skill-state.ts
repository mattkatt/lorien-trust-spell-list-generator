export interface ISpellSkillState {
    healing: number
    corruption: number
    incantation: number
    spellcasting: number

    ritual: number

    lightIncantation: boolean // req: incantation
    darkIncantation: boolean // req: incantation
    enchanting: boolean // req: spellcasting
    shadowMagic: boolean // req: spellcasting

    castAdditionalIncantation: boolean // req: light or dark incant
    castAllIncantation: boolean // req: castAdditionalIncant
    castAdditionalMagecraft: boolean // req: enchant or shadow
    castAllMagecraft: boolean // req: castAdditionalMagecraft

    highMagic: boolean // req: any spellcasting level 2
    highCounter: boolean // req: any spellcasting

    daemonology: boolean // req: spellcasting
    elementalism: boolean // req: spellcasting or incantation
    necromancy: boolean // req: corruption, shadow or dark incant
    theology: boolean // req: incantation

    highDaemonology: boolean // req: daemonology + level 2 spellcasting
    highElementalism: boolean // req: elementalism + (level 2 healing || level 2 spellcasting + enchanting || level 2 incanting + light incant)
    highNecromancy: boolean // req: necromancy  + (level 2 corruption || level 2 spellcasting + shadow || level 2 incant + dark incant)
    highTheology: boolean // req: theology + level 2 incant

    performTransportRite: boolean // req: any spellcasting
    performTeleportRite: boolean // req: any spellcasting + performTransport
}

export const defaultSpellSkillState: ISpellSkillState = {
    healing: 0,
    corruption: 0,
    incantation: 0,
    spellcasting: 0,

    ritual: 0,

    lightIncantation: false,
    darkIncantation: false,
    enchanting: false,
    shadowMagic: false,

    castAdditionalIncantation: false,
    castAllIncantation: false,
    castAdditionalMagecraft: false,
    castAllMagecraft: false,

    highMagic: false,
    highCounter: false,

    daemonology: false,
    elementalism: false,
    necromancy: false,
    theology: false,

    highDaemonology: false,
    highElementalism: false,
    highNecromancy: false,
    highTheology: false,

    performTransportRite: false,
    performTeleportRite: false,
}
