import React, {Component} from 'react';
import {
  Card,
  CardTitle,
  Col,
  Collapsible,
  CollapsibleItem,
  Footer,
  Navbar,
  NavItem,
  Row
} from 'react-materialize';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar brand="Ducky Exchange" className="amber lighten-1" left>
          <NavItem href="https://bittrex.com/">Bittrex</NavItem>
          <NavItem href="https://coincap.io/">CoinCap</NavItem>
          <NavItem href="https://www.kraken.com/">Kraken</NavItem>
          <NavItem href="https://poloniex.com/">Poloniex</NavItem>
        </Navbar>
        <main>
          <Row className="cards">
            <Col l={4} m={6} s={12}>
              <Card horizontal header={<CardTitle image="./assets/huey.png" />}>
                <h2 className="name">Huey - </h2>
                <h2 className="currency">Ethereum</h2>
                <h3>Kraken currently offers the best exchange:</h3>
                <p className="exchange">1 Ethereum = 0.061309 Bitcoin</p>
                <p>For 5 Bitcoin, Donald can buy Huey 81.55 Etehereum.</p>
              </Card>
              <Collapsible className="address">
                <CollapsibleItem
                  header="Huey's Bitcoin Address"
                  icon="credit_card">
                  37Pu2KBsn2yEaHfqhwHAXD9BWpQtxUJn8R
                </CollapsibleItem>
              </Collapsible>
            </Col>
            <Col l={4} m={6} s={12}>
              <Card
                horizontal
                header={<CardTitle image="./assets/louie.png" />}>
                <h2 className="name">Louie - </h2>
                <h2 className="currency">Litecoin</h2>
                <h3>Kraken currently offers the best exchange:</h3>
                <p className="exchange">1 Litecoin = 0.0188195 Bitcoin</p>
                <p>For 5 Bitcoin, Donald can buy Louie 265.68 Litecoin.</p>
              </Card>
              <Collapsible className="address">
                <CollapsibleItem
                  header="Louie's Bitcoin Address"
                  icon="credit_card">
                  3E6HuQeSqTtk4i88fTji73oN3NisTzU9R6
                </CollapsibleItem>
              </Collapsible>
            </Col>
            <Col l={4} m={6} s={12}>
              <Card
                horizontal
                header={<CardTitle image="./assets/dewey.png" />}>
                <h2 className="name">Dewey - </h2>
                <h2 className="currency">Dash</h2>
                <h3>Poloniex currently offers the best exchange:</h3>
                <p className="exchange">1 Dash = 0.04727 Bitcoin</p>
                <p>For 5 Bitcoin, Donald can buy Dewey 105.78 Dash.</p>
              </Card>
              <Collapsible className="address">
                <CollapsibleItem
                  header="Dewey's Bitcoin Address"
                  icon="credit_card">
                  3BYsxrhEbLuC38YtQi5ZJSTeswFt55Fznn
                </CollapsibleItem>
              </Collapsible>
            </Col>
          </Row>
        </main>
        <Footer
          className="amber darken-1"
          copyrights="&copy 2015 Copyright Text"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">
              More Links
            </a>
          }
          links={
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 1
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 2
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 3
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Link 4
                </a>
              </li>
            </ul>
          }>
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">
            You can use rows and columns here to organize your footer content.
          </p>
        </Footer>
      </div>
    );
  }
}

export default App;
