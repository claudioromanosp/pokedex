import "./styles.css"
import ContainerFluid from "../../components/Layout/ContainerFluid";
import Container from "../../components/Layout/Container";
import Row from "../../components/Layout/Row";
import Col from "../../components/Layout/Col";
import Logo from "../Logo";


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
          </Row>
        </Container>
      </ContainerFluid>
    </header>
  );
}

export default Header;
