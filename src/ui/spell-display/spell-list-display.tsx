import React, { FC } from "react"
import { ISpell } from "../../interface/spells"

interface ISpellListDisplayProps {
    spells: Array<ISpell>
    onSelect: (spell: ISpell) => void
}

export const SpellListDisplay: FC<ISpellListDisplayProps> = ({ spells, onSelect }) => {
    return (
        <ul>
            {spells.map((spell, index) => (
                <li key={index} onClick={() => onSelect(spell)}>
                    <b>{spell.name}</b> - ({spell.range}, {spell.class}, {spell.characteristic}, {spell.duration})
                </li>
            ))}
        </ul>
    )
}
