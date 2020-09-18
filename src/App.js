import React from "react";
import { Route } from "react-router-dom";
import routes from "./routes";
import messages from "./messages.json";
import { IntlProvider, FormattedMessage } from "react-intl";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en'
    }
  }

  headerContent = () => {
    const style = { display: 'flex', justifyContent: 'space-around' };
    return (
      <div style={style}>
        <h2><FormattedMessage
          id="app.title"
          defaultMessage="App Title (Fallback option)"
        /></h2>
        {this.languageSelection()}
      </div>
    )
  }

  languageSelection = () => {
    const style = { cursor: 'pointer' };
    return (
      <div>
        <a role="button" style={style} onClick={() => this.setState({lang:"en"})}>
          EN
          </a>{" "}
          |
        <a role="button" style={style} onClick={() => this.setState({lang:"ru"})}>
          RU
          </a>{" "}
          |
        <a role="button" style={style} onClick={() => this.setState({lang:"fr"})}>
          FR
          </a>{" "}
          |
        <a role="button" style={style} onClick={() => this.setState({lang:"random"})}>
          Random
          </a>
      </div>
    )
  }

  render() {
    const { lang } = this.state;

    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          {this.headerContent(this.props)}
            {routes.map((route, index) => {
              const pageMessages = route.messages;
              // wrap IntlProvider when JSON for messages exists for the Route else render Route
              if (pageMessages) {
                const messageList = { ...messages[lang], ...pageMessages[lang] };
                return (<IntlProvider key={index} locale={lang} messages={messageList}>
                  <Route exact={route.exact} path={route.path} component={route.component} />
                </IntlProvider>);
              } else {
                return <Route key={index} exact={route.exact} path={route.path} component={route.component} />
              }
            })}
        </div>
      </IntlProvider>
    );
  }
}

export default (App);