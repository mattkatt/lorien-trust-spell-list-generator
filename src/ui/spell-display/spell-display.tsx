import React, { FC, useContext, useEffect, useState } from "react"
import { Row, Col, Alert } from "antd"

import { ISpell } from "../../interface/spells"
import { SpellListDisplay } from "./spell-list-display"
import { SpellInfo } from "../spell-info/spell-info"
import { SpellDivider } from "./spell-divider"
import { SpellDisplayTitle } from "./spell-display-title"
import { SpellSkillContext } from "../../context/spell-skill-context"
import { spellService } from "../../service/spell-service"
import { emptySpellList, ISpellLists } from "../../data/spell-lists"

type breakpoint = "xs" | "sm" | "md" | "lg"

interface SpellDisplayProps {}

export const SpellDisplay: FC<SpellDisplayProps> = () => {
    const { spellSkillState } = useContext(SpellSkillContext)
    const [spellList, setSpellList] = useState<ISpellLists>(emptySpellList)
    const [selectedSpell, setSelectedSpell] = useState<ISpell | null>(null)
    const [size, setSize] = useState<breakpoint>("xs")

    useEffect(() => {
        const { generateSpellList } = spellService()
        setSpellList(generateSpellList(spellSkillState))
    }, [spellSkillState, setSpellList])

    const listOne = spellList["1"]
    const listTwo = spellList["2"]
    const listThree = spellList["3"]

    useEffect(() => {
        const onResize = () => {
            let width = window.innerWidth
            let newSize: breakpoint

            if (width >= 992) {
                newSize = "lg"
            } else if (width >= 768) {
                newSize = "md"
            } else if (width >= 576) {
                newSize = "sm"
            } else {
                newSize = "xs"
            }

            if (newSize !== size) {
                setSize(newSize)
            }
        }

        window.addEventListener("resize", onResize)

        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, [size])

    return (
        <Row style={{ margin: "15px", maxWidth: "1200px" }} gutter={16}>
            <Col hidden={listOne.length > 0} span={24}>
                <Alert message="Select a spell list to begin" />
            </Col>

            <Col hidden={listOne.length <= 0} sm={23} md={11} lg={7}>
                <SpellDisplayTitle>Level One</SpellDisplayTitle>
                <SpellListDisplay spells={listOne} onSelect={setSelectedSpell} />
            </Col>

            <SpellDivider hidden={["xs", "sm"].includes(size) || listTwo.length <= 0} />

            <Col hidden={listTwo.length <= 0} sm={23} md={11} lg={7}>
                <SpellDisplayTitle>Level Two</SpellDisplayTitle>
                <SpellListDisplay spells={listTwo} onSelect={setSelectedSpell} />
            </Col>

            <SpellDivider hidden={["xs", "sm", "md"].includes(size) || listThree.length <= 0} />

            <Col hidden={listThree.length <= 0} sm={23} md={11} lg={7}>
                <SpellDisplayTitle>Level Three</SpellDisplayTitle>
                <SpellListDisplay spells={listThree} onSelect={setSelectedSpell} />
            </Col>

            <Col hidden={!selectedSpell} span={24} style={{ marginTop: "15px" }}>
                <SpellInfo spell={selectedSpell} onDismiss={() => setSelectedSpell(null)} />
            </Col>
        </Row>
    )
}
