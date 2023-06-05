import { StyledParagraph } from "../../styles/paragraph"
import { StyledSpan } from "../../styles/span"
import { StyledCountSection } from "./style"

export const CountSection = ({ data }) => {

    const total = data.reduce((acc, act) => {

        if (act.type === "Entrada") {
            return Number(acc) + Number(act.value)
        }
        else if (act.type === "Saída") {
            return Number(acc) - Number(act.value)
        }
        else {
            return Number(acc) - Number(act.value)
        }

    }, 0)


    return (
        <StyledCountSection>
            <div>
                <div>
                    <StyledParagraph>Valor total:</StyledParagraph>
                    <StyledParagraph className="color__primary">R$ {total}</StyledParagraph>
                </div>
                <StyledSpan>O valor se refere ao saldo</StyledSpan>
            </div>

        </StyledCountSection>
    )
}