import React from "react"
import { Layout, Button } from "antd"

import { defaultSpellSkillState } from "./interface/spell-skill-state"
import { SpellDisplay } from "./ui/spell-display/spell-display"
import { SpellForm } from "./ui/spell-form/spell-form"
import { SidePanel } from "./ui/side-panel/side-panel"
import { SpellSkillProvider, SpellSkillConsumer } from "./context/spell-skill-context"
import { AppHeader, AppFooter } from "./ui/app"

import "./App.css"

export const App = () => {
    const { Content } = Layout

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
                        <AppHeader />
                        <SpellDisplay />
                    </Content>

                    <AppFooter>
                        <span>
                            Creative Content &copy; <a href="https://lorientrust.com/">Lorien Trust</a> | App by{" "}
                            <a href="https://github.com/mattkatt">Matt Evans</a>
                        </span>

                        <Button onClick={() => alert("Print function not yet enabled")}>Print</Button>
                    </AppFooter>
                </Layout>
            </Layout>
        </SpellSkillProvider>
    )
}
