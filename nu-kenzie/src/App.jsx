import { useState } from "react"
import { GlobalReset } from "./styles/reset"
import { GlobalStyles } from "./styles/global"
import { Header } from "./components/Header"
import { FormSection } from "./components/FormSection"
import { CountSection } from "./components/CountSection"
import { ListSection } from "./components/ListSection"
import { StyledMain } from "./styles/main"

function App() {

  const [data, setData] = useState([])


  return (
    <>
      <GlobalReset />
      <GlobalStyles />
      <Header />
      <StyledMain>
        <div>
          <FormSection data={data} setData={setData} />
          <CountSection data={data} setData={setData} />
        </div>
        <ListSection data={data} setData={setData} />
      </StyledMain>
    </>
  )
}

export default App