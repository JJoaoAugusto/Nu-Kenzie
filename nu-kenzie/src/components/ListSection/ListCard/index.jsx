
import { StyledParagraph } from "../../../styles/paragraph"
import { StyledSpan } from "../../../styles/span"
import { StyledCard } from "./style"

export const ListCard = ({ element, removeContent }) => {

    return (
        <StyledCard>
            {element.type === "Saída" ?
                <div className="container__grey">
                    <div className="content">
                        <StyledParagraph>{element.description}</StyledParagraph>
                        <StyledSpan>{element.type}</StyledSpan>
                    </div>
                    <div className="aside">
                        <StyledSpan>R$ {Number(element.value).toFixed(2)}</StyledSpan>
                        <button onClick={(e) => { removeContent(element.id) }}>excluir</button>
                    </div>
                </div>
                :
                <div className="container__secondary">
                    <div className="content">
                        <StyledParagraph>{element.description}</StyledParagraph>
                        <StyledSpan>{element.type}</StyledSpan>
                    </div>
                    <div className="aside">
                        <StyledSpan>R$ {Number(element.value).toFixed(2)}</StyledSpan>
                        <button onClick={(e) => { removeContent(element.id) }}>excluir</button>
                    </div>
                </div>
            }

        </StyledCard>
    )
}