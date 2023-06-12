import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { StyledButton, StyledImput, StyledSelect } from '../../styles/form';
import { StyledFormSection } from './style';
import { StyledSpan } from '../../styles/span';


export const FormSection = ({ data, setData }) => {

    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")

    const addContent = () => {
        const newContent = {
            description, value, type, id: uuidv4()
        }
        setData([...data, newContent,])
    }

    const submitForm = (e) => {
        e.preventDefault()
        addContent()
        setDescription("")
        setValue("")
        setType("")
    }

    return (
        <StyledFormSection >
            <form onSubmit={submitForm}>

                <StyledSpan>Descrição</StyledSpan>
                <StyledImput required onChange={(e) => setDescription(e.target.value)} type="text" value={description} placeholder="Digite aqui sua descrição" />
                <StyledSpan className='span__grey-3'>Ex: Compra de roupas</StyledSpan>

                <StyledSpan>Valor (R$)</StyledSpan>
                <StyledImput required onChange={(e) => setValue(e.target.value)} type="number" value={value} placeholder="1" />

                <StyledSelect required onChange={(e) => setType(e.target.value)} value={type}>
                    <option value="">Selecione o tipo</option>
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </StyledSelect>

                <StyledButton type="submit">Inserir Valor</StyledButton>
            </form>
        </StyledFormSection>
    )
}