import React, { FC } from "react"
import { Card, Modal, Space } from "antd"

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

    const displayType = window.innerWidth >= 768 ? "card" : "modal"

    const spellInfo = (
        <>
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
        </>
    )

    const getDisplay = () => {
        if (displayType === "card") {
            return (
                <Card title={spell.name} extra={<CloseIcon onClick={onDismiss} />}>
                    {spellInfo}
                </Card>
            )
        }

        return (
            <Modal
                title={spell.name}
                onCancel={onDismiss}
                visible={true}
                footer={null}
                closeIcon={<CloseIcon onClick={onDismiss} />}
            >
                {spellInfo}
            </Modal>
        )
    }

    return getDisplay()
}
