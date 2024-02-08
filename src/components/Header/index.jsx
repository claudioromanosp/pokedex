import "./styles.css"
import ContainerFluid from "../../components/Layout/ContainerFluid";
import Container from "../../components/Layout/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Row from "../../components/Layout/Row";
import Col from "../../components/Layout/Col";
import Logo from "../Logo";
import Synvia from "../Synvia";


const Header = () => {
  return (
    <header>
      <ContainerFluid className="header-main">
        <Container>
          <Row>
            <Col className="logo-header">
              <Logo></Logo>
              <h2>Pokédex</h2>
            </Col>
            <Col className="login">
              <ul className="list-inline">
                <li><Synvia /></li>
                <li><FontAwesomeIcon icon={faRightFromBracket} /></li>
              </ul>
              
            </Col>
          </Row>
        </Container>
      </ContainerFluid>
    </header>
  );
}

export default Header;
