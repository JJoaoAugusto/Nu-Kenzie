import NuKenzie from "../../assets/Nu Kenzie.svg"
import { StyledHeader } from "./style"

export const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src={NuKenzie} alt="icone escrito Nu Kenzie" />
            </div>
        </StyledHeader>
    )
}
