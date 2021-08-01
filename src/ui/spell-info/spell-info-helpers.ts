import { Characteristic, Class, Duration, Range } from "../../interface/spells"

const getSpellRange = (rng: Range) => {
    switch (rng) {
        case Range.Mass:
            return "Mass"
        case Range.Self:
            return "Self"
        case Range.Ranged:
            return "Ranged"
        case Range.Proximity:
            return "Proximity"
        case Range.Rite:
            return "Rite"
    }
}

const getSpellClass = (cls: Class) => {
    switch (cls) {
        case Class.Mind:
            return "Mind"
        case Class.Magical:
            return "Magical"
        case Class.Physical:
            return "Physical"
        case Class.Pattern:
            return "Pattern"
    }
}

const getSpellChar = (chr: Characteristic) => {
    switch (chr) {
        case Characteristic.Cure:
            return "Cure"
        case Characteristic.Command:
            return "Command"
        case Characteristic.Counter:
            return "Counter"
        case Characteristic.Damage:
            return "Damage"
        case Characteristic.Detect:
            return "Detect"
        case Characteristic.Enchanted:
            return "Enchanted"
        case Characteristic.Force:
            return "Force"
        case Characteristic.Immobilise:
            return "Immobilise"
        case Characteristic.Special:
            return "Special"
    }
}

const getSpellDuration = (dur: Duration) => {
    switch (dur) {
        case Duration.Instant:
            return "Instant"
        case Duration.TenSeconds:
            return "10 seconds"
        case Duration.ThirtySeconds:
            return "30 seconds"
        case Duration.OneMinute:
            return "1 minute"
        case Duration.FiveMinutes:
            return "5 minutes"
        case Duration.TenMinutes:
            return "10 minutes"
        case Duration.OneHour:
            return "1 hour"
        case Duration.Chant:
            return "Chant"
        case Duration.DamageOverTime:
            return "Damage over time"
        case Duration.Variable:
            return "Variable"
        case Duration.Timeout:
            return "Timeout"
    }
}

export const spellInfoHelpers = {
    getSpellRange,
    getSpellClass,
    getSpellChar,
    getSpellDuration,
}
