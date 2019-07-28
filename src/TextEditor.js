import React, {useState} from 'react';
import {Editor, EditorState} from 'draft-js'
import './Editor.css';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
      <Editor
          className='Editor'
          editorState={editorState}
          onChange={setEditorState}
      />
  );
}

export default TextEditor;
