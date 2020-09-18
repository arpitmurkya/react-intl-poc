import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import Loader from "react-loader";
import routes from "./routes";
import messages from "./messages.json";
import { IntlProvider, FormattedMessage } from "react-intl";
import { setLocale } from "./actions/locale";

const languageSelection = (props) => {
  const style = { cursor: 'pointer' };
  return (
    <div>
      <a role="button" style={style} onClick={() => props.setLocale("en")}>
        EN
        </a>{" "}
        |
      <a role="button" style={style} onClick={() => props.setLocale("ru")}>
        RU
        </a>{" "}
        |
      <a role="button" style={style} onClick={() => props.setLocale("fr")}>
        FR
        </a>{" "}
        |
      <a role="button" style={style} onClick={() => props.setLocale("random")}>
        Random
        </a>
    </div>
  )
}

const headerContent = (props) => {
  const style = { display: 'flex', justifyContent: 'space-around' };
  return (
    <div style={style}>
      <h2><FormattedMessage
        id="app.title"
        defaultMessage="App Title (Fallback option)"
      /></h2>
      {languageSelection(props)}
    </div>
  )
}

class App extends React.Component {
  render() {
    const { loaded, lang } = this.props;

    return (
      <IntlProvider locale={lang} messages={messages[lang]}>
        <div>
          {headerContent(this.props)}
          <Loader loaded={loaded}>
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
          </Loader>
        </div>
      </IntlProvider>
    );
  }
}

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
  lang: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    loaded: state.user.loaded,
    lang: state.locale.lang
  };
}

export default connect(mapStateToProps, { setLocale })(App);
