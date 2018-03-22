import React, {Component} from 'react';
import {Card, CardTitle, Col, Navbar, NavItem, Row} from 'react-materialize';
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
            <Col m={4} s={12}>
              <Card
                horizontal
                header={<CardTitle image="./assets/huey.png" />}
                actions={[<a href="#">This is a link</a>]}>
                <h2>Huey</h2>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information
                </p>
              </Card>
            </Col>
            <Col m={4} s={12}>
              <Card
                horizontal
                header={<CardTitle image="./assets/louie.png" />}
                actions={[<a href="#">This is a link</a>]}>
                <h2>Louie</h2>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information
                </p>
              </Card>
            </Col>
            <Col m={4} s={12}>
              <Card
                horizontal
                header={<CardTitle image="./assets/dewey.png" />}
                actions={[<a href="#">This is a link</a>]}>
                <h2>Dewey</h2>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information
                </p>
              </Card>
            </Col>
          </Row>
        </main>
      </div>
    );
  }
}

export default App;
