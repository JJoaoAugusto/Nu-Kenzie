import { StyledParagraph } from "../../styles/paragraph"
import { ListCard } from "./ListCard"
import { StyledListSection } from "./style"



export const ListSection = ({ data, setData }) => {

    const removeContent = (noteID) => {
        if (confirm("Você realmente deseja excluir?")) {
            setData((data) => data.filter(element => element.id !== noteID))
        }
    }

    return (
        <StyledListSection>
            <StyledParagraph>Resumo Financeiro</StyledParagraph>
            <ul>
                {data.length > 0 ? (
                    data.map(element => < ListCard key={element.id} element={element} removeContent={removeContent} />)
                ) : <p>Você ainda não possui nenhum lançamento </p>}
            </ul>
        </StyledListSection>
    )
}