import React from "react";

const LanguageContext = React.createContext();
const LanguageConsumer = LanguageContext.Consumer;


class LanguageProvider extends React.Component {
    state = {
        language: "french"
    };

    updateLanguage = e => this.setState({ language: e.target.value });

    render() {
        return (
            <LanguageContext.Provider
                value={{
                    language: this.state.language,
                    updateLanguage: this.updateLanguage
                }}
            >
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

const TranslatableText = props => (
    <LanguageConsumer>
        {({ language }) => props.dictionary[language]}
    </LanguageConsumer>
);