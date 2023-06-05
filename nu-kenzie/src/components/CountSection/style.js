import styled from "styled-components";

export const StyledCountSection = styled.section`
    width: 100%;
    max-width: 350px;
    margin-top: 1rem;
    padding: 0 1rem;
    div{
        width: 100%;
        padding: 1rem;
        border: 1px solid var(--grey-2);
    }

    div div{
        padding: 0;
        border: none;
        display: flex;
        justify-content: space-between;
    }
    
    .color__primary{
        color: var(--color-primary);
    }
`