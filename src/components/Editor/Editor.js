import React, { Component } from 'react';
import './Editor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.textArea = React.createRef();
    }

    // Focus text area with cursor at start
    componentDidMount() {
        const textArea = this.textArea.current;
        textArea.focus();
        textArea.setSelectionRange(0, 0);
        textArea.scrollTop = 0;
    }

    render() {
        const { text, clearText, handleInputChange } = this.props;

        return (
            <div className="editor-outer">
                <button onClick={clearText}><FontAwesomeIcon icon={faTrashAlt} /> Clear Text</button>
                <textarea 
                    id="editor" // For fcc tests
                    value={text} 
                    onChange={handleInputChange}
                    ref={this.textArea}
                >
                </textarea>
            </div>
        );
    }
}

export default Editor;