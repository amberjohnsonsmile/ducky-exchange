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
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dashRate: {},
      ethRate: {},
      ltcRate: {}
    };
  }

  componentDidMount() {
    fetch('https://hidden-everglades-48205.herokuapp.com/latest-dash')
      .then(response => response.json())
      .then(response => {
        this.setState({dashRate: response});
      });

    fetch('https://hidden-everglades-48205.herokuapp.com/latest-eth')
      .then(response => response.json())
      .then(response => {
        this.setState({ethRate: response});
      });

    fetch('https://hidden-everglades-48205.herokuapp.com/latest-ltc')
      .then(response => response.json())
      .then(response => {
        this.setState({ltcRate: response});
      });
  }

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
              <Card horizontal="true" header={<CardTitle image="./assets/huey.png" />}>
                <h2 className="name">Huey - </h2>
                <h2 className="currency">Ethereum</h2>
                <h3>{this.state.ethRate.source} currently offers the best exchange:</h3>
                <p className="exchange">1 Ethereum = {this.state.ethRate.bestRate} Bitcoin</p>
                <p>For 5 Bitcoin, Donald can buy Huey {(5 / this.state.ethRate.bestRate).toFixed(2)} Etehereum.</p>
              </Card>
              <Collapsible className="address">
                <CollapsibleItem
                  header="Show Huey's Bitcoin Address"
                  icon="credit_card">
                  37Pu2KBsn2yEaHfqhwHAXD9BWpQtxUJn8R
                </CollapsibleItem>
              </Collapsible>
            </Col>
            <Col l={4} m={6} s={12}>
              <Card
                horizontal="true"
                header={<CardTitle image="./assets/louie.png" />}>
                <h2 className="name">Louie - </h2>
                <h2 className="currency">Litecoin</h2>
                <h3>{this.state.ltcRate.source} currently offers the best exchange:</h3>
                <p className="exchange">1 Litecoin = {this.state.ltcRate.bestRate} Bitcoin</p>
                <p>For 5 Bitcoin, Donald can buy Louie {(5 / this.state.ltcRate.bestRate).toFixed(2)} Litecoin.</p>
              </Card>
              <Collapsible className="address">
                <CollapsibleItem
                  header="Show Louie's Bitcoin Address"
                  icon="credit_card">
                  3E6HuQeSqTtk4i88fTji73oN3NisTzU9R6
                </CollapsibleItem>
              </Collapsible>
            </Col>
            <Col l={4} m={6} s={12}>
              <Card
                horizontal="true"
                header={<CardTitle image="./assets/dewey.png" />}>
                <h2 className="name">Dewey - </h2>
                <h2 className="currency">Dash</h2>
                <h3>{this.state.dashRate.source} currently offers the best exchange:</h3>
                <p className="exchange">1 Dash = {this.state.dashRate.bestRate} Bitcoin</p>
                <p>For 5 Bitcoin, Donald can buy Dewey {(5 / this.state.dashRate.bestRate).toFixed(2)} Dash.</p>
              </Card>
              <Collapsible className="address">
                <CollapsibleItem
                  header="Show Dewey's Bitcoin Address"
                  icon="credit_card">
                  3BYsxrhEbLuC38YtQi5ZJSTeswFt55Fznn
                </CollapsibleItem>
              </Collapsible>
            </Col>
          </Row>
        </main>
        <Footer
          className="amber darken-1"
          copyrights="&copy; 2018 Amber Johnson"
          moreLinks={
            <a
              className="right"
              href="https://github.com/amberjohnsonsmile/exchange">
              View the code for this site
            </a>
          }
          links={
            <ul className="right links">
              <li>
                <a href="https://github.com/amberjohnsonsmile">Github</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/amberjohnsonsmile/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://amberjohnsonsmile.co/">Portfolio</a>
              </li>
              <li>
                <a href="mailto:amberjohnsonsmile@gmail.com">Email</a>
              </li>
            </ul>
          }>
          <h5>Ducky Exchange by Amber Johnson</h5>
          <p>
            The Ducky Exchange pulls live rate updates from the Bittrex,
            CoinCap, Kraken, and Poloniex APIs every five minutes.
          </p>
        </Footer>
      </div>
    );
  }
}

export default App;
