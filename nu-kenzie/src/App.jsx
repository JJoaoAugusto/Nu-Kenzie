import { useState } from "react"
import { GlobalReset } from "./styles/reset"
import { GlobalStyles } from "./styles/global"
import { Header } from "./components/Header"
import { FormSection } from "./components/FormSection"
import { CountSection } from "./components/CountSection"
import { ListSection } from "./components/ListSection"
import { StyledMain } from "./styles/main"

function App() {

  const [data, setData] = useState([
    {
      description: 'Tipo Saída',
      value: '100',
      type: "Saída",
      id: '412ba002-324f-4d5c-b6e5-24d4124f9853'
    },
    {
      description: 'Tipo Entrada',
      value: '100',
      type: 'Entrada',
      id: '412ba002-324f-4d5c-b6e5-24d4124f9824'
    }
  ])


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