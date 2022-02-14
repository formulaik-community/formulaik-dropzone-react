import React from 'react'
//import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

export default (props) => {
  const { customOnValueChanged, initialValues, errors, item: { id, props: itemProps } } = props

  const handleChangeStatus = (fileWithMeta, status, allFilesWithMeta) => {
    const items = allFilesWithMeta.map((item) => {
      if (item.meta.status === 'removed') {
        return null
      }
      return item.file
    }).filter(a => a)
    customOnValueChanged(items)
  }

  return <Dropzone
    onChangeStatus={handleChangeStatus}
    accept="image/*,audio/*,video/*"
    initialFiles={initialValues[id] ? initialValues[id] : []}
    maxFiles={1}
    {...itemProps}
  />
}
