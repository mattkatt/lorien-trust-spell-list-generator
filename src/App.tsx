import React from "react"
import { Layout, Button } from "antd"

import { SpellDisplay } from "./ui/spell-display/spell-display"
import { SpellForm } from "./ui/spell-form/spell-form"
import { SidePanel } from "./ui/side-panel/side-panel"
import { SpellSkillProvider, SpellSkillConsumer } from "./context/spell-skill-context"

import "./App.css"
import { defaultSpellSkillState } from "./interface/spell-skill-state"

export const App = () => {
    const { Content, Header, Footer } = Layout

    return (
        <SpellSkillProvider spellSkills={defaultSpellSkillState}>
            <Layout style={{ minHeight: "100vh" }}>
                <SidePanel>
                    <SpellForm />
                    <SpellSkillConsumer>
                        {({ resetSpellSkills }) => <Button onClick={resetSpellSkills}>Reset</Button>}
                    </SpellSkillConsumer>
                </SidePanel>

                <Layout>
                    <Content>
                        <Header>
                            <h1 style={{ color: "white" }}>Lorien Trust Spell List Generator</h1>
                        </Header>

                        <SpellDisplay />
                    </Content>

                    <Footer
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexWrap: "wrap",
                        }}
                    >
                        <span>
                            Creative Content &copy; <a href="https://lorientrust.com/">Lorien Trust</a> | App by{" "}
                            <a href="https://github.com/mattkatt">Matt Evans</a>
                        </span>
                        <Button onClick={() => alert("Print function not yet enabled")}>Print</Button>
                    </Footer>
                </Layout>
            </Layout>
        </SpellSkillProvider>
    )
}
