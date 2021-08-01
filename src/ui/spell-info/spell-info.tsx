import React, { FC } from "react"
import { Card, Space } from "antd"

import { spellInfoHelpers } from "./spell-info-helpers"
import { ISpell } from "../../interface/spells"
import { CloseIcon } from "../icons/close-icon"

interface ISpellInfoProps {
    spell: ISpell | null
    onDismiss: () => void
}

export const SpellInfo: FC<ISpellInfoProps> = ({ spell = null, onDismiss }) => {
    if (spell === null) {
        return null
    }

    return (
        <Card title={spell.name} extra={<CloseIcon onClick={onDismiss} />}>
            <Space size="middle" style={{ marginBottom: "1em" }}>
                <span>
                    <b>Level:</b> {spell.level}
                </span>
                <span>
                    <b>Range:</b> {spellInfoHelpers.getSpellRange(spell.range)}
                </span>
                <span>
                    <b>Class:</b> {spellInfoHelpers.getSpellClass(spell.class)}
                </span>
                <span>
                    <b>Characteristic:</b> {spellInfoHelpers.getSpellChar(spell.characteristic)}
                </span>
                <span>
                    <b>Duration:</b> {spellInfoHelpers.getSpellDuration(spell.duration)}
                </span>
            </Space>

            <p>
                <b>{spell.actions ? "Actions" : "Vocals"}</b> {spell.actions ?? spell.vocals}
            </p>

            <p style={{ whiteSpace: "break-spaces" }}>{spell.description}</p>
        </Card>
    )
}
