import React, {useState} from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js'

//import Draft.js default CSS library
import 'draft-js/dist/Draft.css'

import EditorToolbar from './EditorToolbar'

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleTab = (e) => {
    //prevent cursor from selecting the next interactive element
    e.preventDefault()

    // assign a constant for the new editorState
    const newState = RichUtils.onTab(e, editorState, 4)

    // if a new editor state exists, set editor state to new state
    // and return 'handled', otherwise return 'not-handled
    if (newState) {
      setEditorState(newState)
      return 'handled'
    } else {
      return 'not-handled'
    }
  }

  return (
      <div className='text-editor'>
        <EditorToolbar
            editorState={editorState}
            setEditorState={setEditorState}
        />
        <Editor
            editorState={editorState}
            onChange={setEditorState}
            onTab={handleTab}
        />
      </div>
  );
}

export default TextEditor;
