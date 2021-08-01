import { Characteristic, Class, Duration, ISpell, List, Range } from "../interface/spells"

export const controlGroup = (group: "Ancestral" | "Daemon" | "Elemental" | "Unliving"): ISpell => {
    let lists: Array<List>

    switch (group) {
        case "Ancestral":
            lists = [List.Theology]
            break
        case "Daemon":
            lists = [List.Daemonology]
            break
        case "Elemental":
            lists = [List.Elementalism]
            break
        case "Unliving":
            lists = [List.DarkIncantation, List.AllIncantation, List.ShadowMagic, List.Corruption]
            break
    }

    return {
        name: `Control ${group}`,
        level: 1,
        range: Range.Ranged,
        class: Class.Pattern,
        characteristic: Characteristic.Command,
        duration: Duration.Variable,
        description: `If cast at a target ${group} successfully (within 30 ft), and the caster has a Control level equal to or lower than the Control Level of the target - then they are Controlled by the caster. No counter or Immunity can stop a Control unless it says so explicitly. The duration of the effect will vary depending on the Dismiss/Control rank of the creature Controlled (Generally 10 mins). This spell may be used as part of a wedge. Note: A Wedge must consist of at least 3 contributing characters - casting the same Dismiss or Control affect (I.e. Control Elemental) and may include both normal and High Casting versions of the same spell.\nA Controlled ${group} must follow the directions of that Controller to the best of their ability (unless it endangers their own or others out-of-character safety or is meant to be out-of-character humiliating or degrading). Unless commanded otherwise, they may not cause them damage, cast spells or use abilities on the Controller - this includes asking for others to cause harm or Controlling others to cause harm to the Controller. Whilst under a Control they may not attempt to cast a Control or Dismiss on themselves through choice or by a command from the Controller and will retail all memories of being controlled after the affect has passed.\nThe creature may only be under one Control at a time. If successfully targeted by another Control effect, the previous Control ends and the new Control period starts as above. If the new Control is cast by the same person then all their previous instructions remain in place. The creature may only be Controlled by the same character three times in a row during one day. If a fourth Control attempt is attempted the effect will not succeed (although they will be aware that the attempt has been made). A Controlling character may end their Control at any time by explicitly stating that the Control effect has ended. If the Controlling character dies then the Control effect immediately ends.\nThe Rank of a Dismiss or Control begins at 2, and can be boosted with occupational skills or items (only one source - an occupational skill OR an item may be used at any one time). The Power expended remains the same but the occupational skill boosts the Dismiss or Control effect as listed on the skill. This boost applies to its use in both the spell itself or if used as part of a wedge.`,
        vocals: `By my Power ‘I Control ${group} Rank X'`,
        lists: lists,
    }
}

export const fullCureGroup = (group: "Ancestral" | "Daemon" | "Elemental"): ISpell => {
    let lists: Array<List>

    switch (group) {
        case "Ancestral":
            lists = [List.Theology]
            break
        case "Daemon":
            lists = [List.Daemonology]
            break
        case "Elemental":
            lists = [List.Elementalism]
            break
    }

    return {
        name: `Full Cure ${group}`,
        level: 2,
        range: Range.Proximity,
        class: Class.Physical,
        characteristic: Characteristic.Cure,
        duration: Duration.Instant,
        description: `Restores all body hits to the target location on a ${group}. This will not be effective on a location suffering from a Fatal Wound, or on a character under the effects Disease or Decay. Note: This effect will also repair any Natural Armour (see Natural Armour Description for full details).`,
        vocals: `By my Power ‘I Fully Cure this ${group}’s &lt;location&gt;'`,
        lists: lists,
    }
}

export const highControlGroup = (group: "Ancestral" | "Daemon" | "Elemental" | "Unliving"): ISpell => {
    let lists: Array<List>

    switch (group) {
        case "Ancestral":
            lists = [List.Theology]
            break
        case "Daemon":
            lists = [List.Daemonology]
            break
        case "Elemental":
            lists = [List.Elementalism]
            break
        case "Unliving":
            lists = [
                List.DarkIncantation,
                List.AllIncantation,
                List.ShadowMagic,
                List.AllSpellcasting,
                List.Corruption,
            ]
            break
    }

    return {
        name: `High Control ${group}`,
        level: 3,
        range: Range.Ranged,
        class: Class.Pattern,
        characteristic: Characteristic.Command,
        duration: Duration.Variable,
        description: `If cast at a target ${group} successfully (within 30 ft), and has a Control level equal to or lower than Rank 8 - then they are Controlled by the caster. No counter or Immunity can stop a Control unless it says so explicitly. The duration of the effect will vary depending on the Dismiss/Control rank of the creature Controlled (Generally 10 mins). This spell may be used as part of a wedge. Note: A Wedge must consist of at least 3 contributing characters - casting the same Dismiss or Control affect (I.e. Control Elemental) and may include both normal and High Casting versions of the same spell.\nA Controlled ${group} must follow the directions of that Controller to the best of their ability (unless it endangers their own or others out-of-character safety or is meant to be out-of-character humiliating or degrading). Unless commanded otherwise, they may not cause them damage, cast spells or use abilities on the Controller - this includes asking for others to cause harm or Controlling others to cause harm to the Controller. Whilst under a Control they may not attempt to cast a Control or Dismiss on themselves through choice or by a command from the Controller and will retail all memories of being controlled after the affect has passed.\nThe creature may only be under one Control at a time. If successfully targeted by another Control effect, the previous Control ends and the new Control period starts as above. If the new Control is cast by the same person then all their previous instructions remain in place.\nThe creature may only be Controlled by the same character three times in a row during one day. If a fourth Control attempt is attempted the effect will not succeed (although they will be aware that the attempt has been made). A Controlling character may end their Control at any time by explicitly stating that the Control effect has ended. If the Controlling character dies then the Control effect immediately ends.\nThe Rank of a Dismiss or Control can be boosted with occupational skills or items (only one source - an occupational skill OR an item may be used at any one time). The Power expended remains the same but the occupational skill boosts the Dismiss or Control effect as listed on the skill. This boost applies to its use in both the spell itself or if used as part of a wedge.`,
        vocals: `By my High Magic Power ‘I Control ${group} rank &lt;X&gt;’`,
        lists: lists,
    }
}

export const speakWithGroup = (group: "Ancestor" | "Daemon" | "Elemental" | "Unliving"): ISpell => {
    let lists: Array<List>

    switch (group) {
        case "Ancestor":
            lists = [
                List.Incantation,
                List.LightIncantation,
                List.DarkIncantation,
                List.AllIncantation,
                List.Theology,
            ]
            break
        case "Daemon":
            lists = [List.Daemonology]
            break
        case "Elemental":
            lists = [List.Elementalism]
            break
        case "Unliving":
            lists = [List.Necromancy]
            break
    }

    return {
        name: `Speak With ${group}`,
        level: 3,
        range: Range.Rite,
        class: Class.Magical,
        characteristic: Characteristic.Special,
        duration: Duration.FiveMinutes,
        description: `This allows you to ask a detailed question of the ${group}. A Referee must be present to observe the Rite. The question may be anything, but the creature will reply to it only if it sees fit, and from its point of view. The creatures' responses will not occur immediately and often will occur overnight. A Speak with ${group} form may be collected from Game Control and filled out with details as required and countersigned by the Referee. This ability may only be used to contact creatures that are in their existence Plane (i.e. an Unliving in the Planes of Unlife) and therefore cannot be used to communicate with a creature on Erdreja itself. In addition this ability may not be used to contact dead or dismissed player characters or creatures that have been dismissed from Erdreja.`,
        vocals: "Role-play at least a 5-minute ceremony to a specific, named Creature.",
        lists: lists,
    }
}

export const strikeForElement = (element: "Air" | "Earth" | "Flame" | "Water"): ISpell => {
    let lists: Array<List>

    switch (element) {
        case "Air":
            lists = [List.Theology]
            break
        case "Earth":
            lists = [List.Elementalism]
            break
        case "Flame":
            lists = [List.Necromancy]
            break
        case "Water":
            lists = [List.Daemonology]
            break
    }

    return {
        name: `Strike For ${element}`,
        level: 2,
        range: Range.Self,
        class: Class.Magical,
        characteristic: Characteristic.Enchanted,
        duration: Duration.OneMinute,
        description: `The caster’s next non-parried successful blow with the melee weapon, held in their primary hand or a large melee weapon held in both hands will strike for ${element} damage, unless the weapon already generates another damage type. If you do not strike someone within 1 min the effect will be lost, but you may swap weapon within this period without losing the effect. Alternatively, the caster may imbue a single projectile with ${element} damage. If you do not shoot the projectile within 1 min the effect will be lost. If the projectile successfully strikes the target the location is stuck with ${element} damage.`,
        vocals: `By my Power ‘I Strike for ${element}’`,
        lists: lists,
    }
}
