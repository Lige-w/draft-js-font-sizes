import React, {useState} from 'react';
import {Editor, EditorState} from 'draft-js'

import EditorToolbar from './EditorToolbar'

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
      <div className='text-editor'>
        <EditorToolbar
            editorState={editorState}
            setEditorState={setEditorState}
        />
        <Editor
            editorState={editorState}
            onChange={setEditorState}
        />
      </div>
  );
}

export default TextEditor;
