import { ISpellSkillState } from "../../interface/spell-skill-state"

const isAnySpellcastingSet = (state: ISpellSkillState) =>
    state.spellcasting > 0 || state.incantation > 0 || state.healing > 0 || state.corruption > 0

const isHighCounterHidden = (state: ISpellSkillState) => !isAnySpellcastingSet(state)

const isHighMagicHidden = (state: ISpellSkillState) =>
    state.spellcasting < 2 && state.incantation < 2 && state.healing < 2 && state.corruption < 2

const isLightIncantationHidden = (state: ISpellSkillState) => state.darkIncantation || state.incantation <= 0

const isDarkIncantationHidden = (state: ISpellSkillState) => state.lightIncantation || state.incantation <= 0

const isCastAdditionalIncantationHidden = (state: ISpellSkillState) =>
    !state.lightIncantation && !state.darkIncantation

const isCastAllIncantationHidden = (state: ISpellSkillState) => !state.castAdditionalIncantation

const isEnchantingHidden = (state: ISpellSkillState) => state.shadowMagic || state.spellcasting <= 0

const isShadowMagicHidden = (state: ISpellSkillState) => state.enchanting || state.spellcasting <= 0

const isCastAdditionalMagecraftHidden = (state: ISpellSkillState) => !state.enchanting && !state.shadowMagic

const isCastAllMagecraftHidden = (state: ISpellSkillState) => !state.castAdditionalMagecraft

const isDaemonologyHidden = (state: ISpellSkillState) => state.spellcasting <= 0

const isElementalismHidden = (state: ISpellSkillState) =>
    state.healing <= 0 && !state.enchanting && !state.lightIncantation

const isNecromancyHidden = (state: ISpellSkillState) =>
    state.corruption <= 0 && !state.shadowMagic && !state.darkIncantation

const isTheologyHidden = (state: ISpellSkillState) => state.incantation <= 0

const isHighDaemonologyHidden = (state: ISpellSkillState) => !state.daemonology

const isHighElementalismHidden = (state: ISpellSkillState) => !state.elementalism

const isHighNecromancyHidden = (state: ISpellSkillState) => !state.necromancy

const isHighTheologyHidden = (state: ISpellSkillState) => !state.theology

const isPerformTransportRiteHidden = (state: ISpellSkillState) => !isAnySpellcastingSet(state)

const isPerformTeleportRiteHidden = (state: ISpellSkillState) => !state.performTransportRite

const isRitualHidden = (state: ISpellSkillState) => !isAnySpellcastingSet(state)

interface ISpellFormHelpers {
    [key: string]: (state: ISpellSkillState) => boolean
}

export const spellFormHelpers: ISpellFormHelpers = {
    isHighCounterHidden,
    isHighMagicHidden,
    isLightIncantationHidden,
    isDarkIncantationHidden,
    isCastAdditionalIncantationHidden,
    isCastAllIncantationHidden,
    isEnchantingHidden,
    isShadowMagicHidden,
    isCastAdditionalMagecraftHidden,
    isCastAllMagecraftHidden,
    isDaemonologyHidden,
    isElementalismHidden,
    isNecromancyHidden,
    isTheologyHidden,
    isHighDaemonologyHidden,
    isHighElementalismHidden,
    isHighNecromancyHidden,
    isHighTheologyHidden,
    isPerformTransportRiteHidden,
    isPerformTeleportRiteHidden,
    isRitualHidden,
}
