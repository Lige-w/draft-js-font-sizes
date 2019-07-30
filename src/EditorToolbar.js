import React from 'react'
import {RichUtils} from 'draft-js'

const EditorToolbar = ({editorState, setEditorState}) => {

    const toggleBlockType = (e, type) => {
        //keep cursor in the same place within the text editor
        e.preventDefault()

        //set block type in editor state to the specified type
        setEditorState(RichUtils.toggleBlockType(editorState, type))
    }

    return (
        <div>
            {/* Set block type to <ul> when clicked */}
            <button onMouseDown={e => toggleBlockType(e, 'unordered-list-item')}>UL</button>
            {/* Set block type to <ol> when clicked */}
            <button onMouseDown={e => toggleBlockType(e, 'ordered-list-item')}>OL</button>
        </div>
    )
}

export default EditorToolbar