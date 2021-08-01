export enum Range {
    Mass = "mss",
    Ranged = "rng",
    Proximity = "prox",
    Self = "slf",
    Rite = "rit",
}

export enum Class {
    Magical = "mag",
    Mind = "mnd",
    Pattern = "pat",
    Physical = "phy",
}

export enum Characteristic {
    Command = "cmd",
    Counter = "ctr",
    Cure = "cur",
    Damage = "dam",
    Detect = "det",
    Enchanted = "enc",
    Force = "for",
    Immobilise = "imb",
    Special = "spc",
}

export enum Duration {
    Instant = "ins",
    TenSeconds = "10s",
    ThirtySeconds = "30s",
    OneMinute = "1m",
    FiveMinutes = "5m",
    TenMinutes = "10m",
    OneHour = "1hr",
    Chant = "cht",
    Timeout = "tmo",
    Variable = "var",
    DamageOverTime = "dot",
}

export enum List {
    Incantation = "incantation",
    LightIncantation = "lightIncantation",
    DarkIncantation = "darkIncantation",
    AllIncantation = "allIncantation",
    Spellcasting = "spellcasting",
    Enchanting = "enchanting",
    ShadowMagic = "shadowMagic",
    AllSpellcasting = "allSpellcasting",
    Healing = "healing",
    Corruption = "corruption",
    Necromancy = "necromancy",
    Daemonology = "daemonology",
    Theology = "theology",
    Elementalism = "elementalism",
    Ritual = "ritual",
}

export interface ISpell {
    name: string
    level: number
    range: Range
    class: Class
    characteristic: Characteristic
    duration: Duration
    description: string
    actions?: string
    vocals?: string
    lists: Array<List>
}
