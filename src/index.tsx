import React from "react"
import { createRoot } from "react-dom/client"
import '@ant-design/v5-patch-for-react-19';
import "./index.css"
import { App } from "./App"

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
