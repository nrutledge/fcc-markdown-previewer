import React from 'react';
import './Editor.css';

const Editor = ({text, handleInputChange, clearText}) => {
    return (
        <div className="editor-outer">
            <button onClick={clearText}>Clear Text</button>
            <textarea 
                id="editor" // For fcc tests
                value={text} 
                onChange={handleInputChange}
            >
            </textarea>
        </div>
    );
}

export default Editor;