import React, { Component } from 'react';
// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js';

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';
import FroalaEditor from 'react-froala-wysiwyg';
import $ from 'jquery';
window.$ = $;


class Editor extends Component {


    constructor() {
        super();
        this.state = {
            model: '',
        };
    }

    handleModelChange = (model) => {
        this.setState({
            model: model
        });
    }

    render() {
        const {model} = this.state;
        return (
            <React.Fragment>
                <FroalaEditor
                    model={model}
                    onModelChange={this.handleModelChange}
                />
            </React.Fragment>
        )
    }
}

export default Editor;