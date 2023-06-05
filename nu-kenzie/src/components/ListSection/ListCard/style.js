import styled from "styled-components";

export const StyledCard = styled.li`
display: flex;
    justify-content: space-between;
    width: 100%;

    .container__grey{
        min-width: 100%;
        height: 80px;
        padding: 0.5rem 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: var(--grey-1);
        border-left: 4px solid var(--grey-2);
        border-radius: 4px 0 0 4px;
    }

    .container__secondary{
        min-width: 100%;
        height: 80px;
        padding: 0.5rem 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        background-color: var(--grey-1);
        border-left: 0.25rem solid var(--color-secondary);
        border-radius: 0.25rem 0 0 0.25;
    }

    div button{
        width: fit-content;
        padding: 2px 10px;

        background-color: var(--grey-2);
        border-radius: 2px;

        font-weight: 400;
        font-size: 0.625rem;
    }

    div button:hover{
        background-color: var(--grey-4);
        color: var(--grey-1);
    }

    .content{
        width: 80%;
        padding: 0.5rem;
        gap: 0.5rem;

        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
    }

    .aside{
        width: 100px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`