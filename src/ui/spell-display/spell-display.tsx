import React, { FC, useState } from "react"
import { Row, Col, Alert } from "antd"

import { ISpell } from "../../interface/spells"
import { SpellListDisplay } from "./spell-list-display"
import { SpellInfo } from "../spell-info/spell-info"
import { ISpellLists } from "../../data/spell-lists"
import { SpellDivider } from "./spell-divider"
import { SpellDisplayTitle } from "./spell-display-title"

interface ISpellDisplayProps {
    spellList: ISpellLists
}

export const SpellDisplay: FC<ISpellDisplayProps> = ({ spellList }) => {
    const [selectedSpell, setSelectedSpell] = useState<ISpell | null>(null)
    const listOne = spellList["1"]
    const listTwo = spellList["2"]
    const listThree = spellList["3"]

    return (
        <Row style={{ margin: "15px" }} gutter={16}>
            <Col hidden={listOne.length > 0} span={24}>
                <Alert message="Select a spell list to begin" />
            </Col>

            <Col hidden={listOne.length <= 0}>
                <SpellDisplayTitle>Level One</SpellDisplayTitle>
                <SpellListDisplay spells={listOne} onSelect={setSelectedSpell} />
            </Col>

            <SpellDivider hidden={listTwo.length <= 0} />

            <Col hidden={listTwo.length <= 0}>
                <SpellDisplayTitle>Level Two</SpellDisplayTitle>
                <SpellListDisplay spells={listTwo} onSelect={setSelectedSpell} />
            </Col>

            <SpellDivider hidden={listThree.length <= 0} />

            <Col hidden={listThree.length <= 0}>
                <SpellDisplayTitle>Level Three</SpellDisplayTitle>
                <SpellListDisplay spells={listThree} onSelect={setSelectedSpell} />
            </Col>

            <Col hidden={!selectedSpell} span={24} style={{ marginTop: "15px" }}>
                <SpellInfo spell={selectedSpell} onDismiss={() => setSelectedSpell(null)} />
            </Col>
        </Row>
    )
}
