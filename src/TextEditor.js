import React, {useState} from 'react';
import {Editor, EditorState} from 'draft-js'

//import draft-js-custom-styles
import createStyles from 'draft-js-custom-styles'


import EditorToolbar from './EditorToolbar'

//use the 'font-size' CSS property with #styles, and #customStyleFn
const {styles, customStyleFn} = createStyles(['font-size'])

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  return (
      <div className='text-editor'>
        <EditorToolbar
            editorState={editorState}
            setEditorState={setEditorState}

            //pass styles as prop
            styles={styles}
        />
        <Editor
            editorState={editorState}
            onChange={setEditorState}

            //pass customStyleFn as prop
            customStyleFn={customStyleFn}
        />
      </div>
  );
}

export default TextEditor;
