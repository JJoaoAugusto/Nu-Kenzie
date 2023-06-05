import styled from "styled-components";

export const StyledFormSection = styled.section`
    width: 100%;
    max-width: 350px;
    padding: 0 1rem;
    form{
        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        padding: 1.5rem;
        border: 1px solid var(--grey-2);
    }
    .span__grey-3{
        color: var(--grey-3);
    }
`