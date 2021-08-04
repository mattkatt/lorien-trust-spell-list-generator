import React, { useEffect, useState } from "react"
import { Layout, Button } from "antd"

import { spellService } from "./service/spell-service"
import { SpellDisplay } from "./ui/spell-display/spell-display"
import { SpellForm } from "./ui/spell-form/spell-form"
import { defaultSpellSkillState } from "./interface/spell-skill-state"

import "./App.css"
import { emptySpellList, ISpellLists } from "./data/spell-lists"
import { SidePanel } from "./ui/side-panel/side-panel"

export const App = () => {
    const { Content, Header, Footer } = Layout
    const [spellSkillState, setSpellSkillState] = useState(defaultSpellSkillState)
    const [spellList, setSpellList] = useState<ISpellLists>(emptySpellList)

    useEffect(() => {
        const { generateSpellList } = spellService()
        const list = generateSpellList(spellSkillState)
        setSpellList(list)
    }, [spellSkillState])

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <SidePanel>
                <SpellForm spellSkillState={spellSkillState} setSpellSkillState={setSpellSkillState} />

                <Button onClick={() => setSpellSkillState(defaultSpellSkillState)}>Reset</Button>
            </SidePanel>

            <Layout>
                <Content>
                    <Header>
                        <h1 style={{ color: "white" }}>Lorien Trust Spell List Generator</h1>
                    </Header>

                    <SpellDisplay spellList={spellList} />
                </Content>

                <Footer>
                    Creative Content &copy; <a href="https://lorientrust.com/">Lorien Trust</a> | App by{" "}
                    <a href="https://github.com/mattkatt">Matt Evans</a>
                </Footer>
            </Layout>
        </Layout>
    )
}
