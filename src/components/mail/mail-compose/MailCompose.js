import React, { Component } from 'react';
// import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import './MailCompose.scss';
import { TextField } from '@material-ui/core';
import Editor from './../editor/Editor';

class MailCompose extends Component {

    componentDidMount() {
        // DecoupledEditor.create(document.querySelector('#editor'), {
        //     language: 'vi',
        // })
        //     .then(editor => {
        //         const toolbarContainer = document.querySelector('#toolbar-container');
        //         toolbarContainer.appendChild(editor.ui.view.toolbar.element);
        //         console.log(editor);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }

    render() {
        return (
            <div className="mailCompose">
                <div className="mailCompose__header">
                    <TextField
                        id="filled-email-input"
                        label="To (Cs/Bcc)"
                        type="email"
                        name="email"
                        className="formControl"
                        autoComplete="email"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Title"
                        className="formControl"
                        margin="normal"
                    />
                </div>

                <Editor />
                <div className="buttonSend" align="right">
                    <Button variant="contained" color="primary" >
                        Send <SendIcon className="iconButton" />
                    </Button>
                </div>
            </div>
        );
    }
}

export default MailCompose;