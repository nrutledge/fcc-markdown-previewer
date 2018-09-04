import React from 'react';
import marked from 'marked';
import './Preview.css';

const renderer = new marked.Renderer();

renderer.link = function(href, title, text) {
    return `<a href="${href}" target="_blank">${text}</a>`;
}

renderer.paragraph = function(text) {
    const newText = text.replace(/\n/g,'\n<br>\n');
    return `<p>${newText}</p>\n`;
}

const options = {
    renderer: renderer,
    gfm: true
}

const Preview = ({text}) => {
    const innerHTML = { __html: marked(text, options) };

    return (
        <div 
            id="preview" // For fcc tests
            className="preview"
            dangerouslySetInnerHTML={innerHTML} 
        />         
    );
};

export default Preview;