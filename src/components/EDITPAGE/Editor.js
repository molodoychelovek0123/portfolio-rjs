// Класс editorcomponent от froala editor. Сейчас не используется. Можете забирать на использование, мне не жалко

import React from 'react';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditor from "react-froala-wysiwyg";

// Require Font Awesome.
// import 'font-awesome/css/font-awesome.css';

import 'froala-editor/js/plugins/code_view.min.js';

export default class EditorComponent extends React.Component {
    constructor(props) {
        super(props);

        this.handleModelChange = this.handleModelChange.bind(this);
        if (this.props.model) {
            this.state = {
                model: this.props.model
            };
        } else {
            this.state = {
                model: 'Example text'
            };
        }

    }

    handleModelChange = function (model) {
        this.setState({
            model: model
        });
    }

    render() {
        return (
            <>
                <FroalaEditor
                    model={this.state.model}
                    onModelChange={this.handleModelChange}
                    codeViewP="true"
                />

            </>)

    }
}