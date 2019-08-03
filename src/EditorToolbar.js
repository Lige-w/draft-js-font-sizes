import React, {useState} from 'react'

import {fontSizes} from "./styleMap";

import './EditorToolbar.css'

const EditorToolbar = ({editorState, setEditorState}) => {
    const [isShowingFontMenu, setIsShowingFontMenu] = useState(false)

    const fontSizeOptions = fontSizes.map(fontSize => {
        const value = `font-size-${fontSize}`
        return (
            <div
                key={value}
                className='font-size-option'

            >{fontSize}</div>
        )
    })

    return (
        <div>
            <div className="font-size-dropdown">
                <button
                    onMouseDown={e => {e.preventDefault(); setIsShowingFontMenu(!isShowingFontMenu)}}
                >Font Size</button>
                {isShowingFontMenu ?
                    <div className="font-size-menu">
                        {fontSizeOptions}
                    </div> : null
                }
            </div>
        </div>
    )
}

export default EditorToolbar