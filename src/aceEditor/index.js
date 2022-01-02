import React from 'react'

const Editor = (props) => {
    if (typeof window === 'undefined') {
        return null
    }

    const AceEditor = require('react-ace').default
    const { mode = 'jade' } = props

    require('ace-builds/src-noconflict/ext-language_tools')
    require('ace-builds/src-noconflict/theme-github')

    switch (mode) {
        default:
        case 'jade':
            require('ace-builds/src-noconflict/mode-jade')
            break
        case 'json':
            require('ace-builds/src-noconflict/mode-json')
            break
    }

    return <AceEditor {...props} />
}

export default (props) => {
    const {
        values,
        customOnValueChanged,
        errors,
        item: { id, props: itemProps }
    } = props

    return <Editor
        value={values[id]}
        mode="jade"
        theme="github"
        onChange={customOnValueChanged}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            ...itemProps.options
        }}
        width={'100%'}
        fontSize={14}
        wrapEnabled
        showPrintMargin={false}
        showGutter
        className={`textarea w-full textarea-bordered bg-gray-50 ${errors[id] ? 'bg-red-100 border-red-600' : ''}`}
        {...itemProps}
    />
}