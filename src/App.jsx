import { useState, useEffect } from "react"

import { GlobalReset } from "./styles/reset"
import { GlobalStyles } from "./styles/global"

import { Page } from "./components/page"

function App() {

useEffect(()=>{
})

  return(
    <>
      <GlobalReset />
      <GlobalStyles />
      <main>
        <Page />
      </main>
    </>
  )
}

export default App
