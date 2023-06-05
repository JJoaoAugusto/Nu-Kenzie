
import { StyledParagraph } from "../../../styles/paragraph"
import { StyledSpan } from "../../../styles/span"
import { StyledCard } from "./style"

export const ListCard = ({ data, removeContent }) => {

    return (
        <StyledCard>
            {data.type === "Saída" ?
                <div className="container__grey">
                    <div className="content">
                        <StyledParagraph>{data.description}</StyledParagraph>
                        <StyledSpan>{data.type}</StyledSpan>
                    </div>
                    <div className="aside">
                        <StyledSpan>R$ {Number(data.value).toFixed(2)}</StyledSpan>
                        <button onClick={(e) => { removeContent(data.id) }}>excluir</button>
                    </div>
                </div>
                :
                <div className="container__secondary">
                    <div className="content">
                        <StyledParagraph>{data.description}</StyledParagraph>
                        <StyledSpan>{data.type}</StyledSpan>
                    </div>
                    <div className="aside">
                        <StyledSpan>R$ {Number(data.value).toFixed(2)}</StyledSpan>
                        <button onClick={(e) => { removeContent(data.id) }}>excluir</button>
                    </div>
                </div>
            }

        </StyledCard>
    )
}