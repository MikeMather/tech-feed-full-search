import { Button } from "../styles";
import { HeaderActions, HeaderContainer } from "./styles";


const Header = () => {

    return (
        <HeaderContainer>
            <img alt="Big tech feed logo" src="img/logo_transparent.png" width={300} />
            <HeaderActions>
                <Button color='grey'>Suggest a blog</Button>
                <Button color='orange'>Setup Alerts</Button>
            </HeaderActions>
        </HeaderContainer>
    )
};

export default Header;