import styled from "styled-components";

export const StyledImput = styled.input`
    background-color: var(--grey-1);
    border: none;
    padding: 1rem;
`

export const StyledSelect = styled.select`
    background-color: var(--grey-1);
    border: none;
    padding: 1rem;
`

export const StyledButton = styled.button`
    background-color: var(--color-primary);
    color: var(--grey-1);
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem;

    :hover{
        background-color: var(--color-primary-2);
    }
`