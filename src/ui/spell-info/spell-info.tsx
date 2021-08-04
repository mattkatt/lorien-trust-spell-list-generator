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

    const isCard = window.innerWidth >= 992

    const spellInfo = (
        <>
            <Space size="middle" style={{ marginBottom: "1em", maxWidth: "100%", flexWrap: "wrap" }}>
                <span>
                    <b>Level:</b> <br hidden={isCard} /> {spell.level}
                </span>
                <span>
                    <b>Range:</b> <br hidden={isCard} /> {spellInfoHelpers.getSpellRange(spell.range)}
                </span>
                <span>
                    <b>Class:</b> <br hidden={isCard} /> {spellInfoHelpers.getSpellClass(spell.class)}
                </span>
                <span>
                    <b>Characteristic:</b> <br hidden={isCard} />{" "}
                    {spellInfoHelpers.getSpellChar(spell.characteristic)}
                </span>
                <span>
                    <b>Duration:</b> <br hidden={isCard} /> {spellInfoHelpers.getSpellDuration(spell.duration)}
                </span>
            </Space>

            <p>
                <b>{spell.actions ? "Actions" : "Vocals"}</b> {spell.actions ?? spell.vocals}
            </p>

            <p style={{ whiteSpace: "break-spaces" }}>{spell.description}</p>
        </>
    )

    const getDisplay = () => {
        if (isCard) {
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
