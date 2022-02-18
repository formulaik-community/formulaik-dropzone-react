import React from 'react'
//import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

export default (props) => {
  const { onValueChanged, initialValues, errors, item: { id, params } } = props

  const handleChangeStatus = (fileWithMeta, status, allFilesWithMeta) => {
    const items = allFilesWithMeta.map((item) => {
      if (item.meta.status === 'removed') {
        return null
      }
      return item.file
    }).filter(a => a)
    onValueChanged(items)
  }

  return <Dropzone
    onChangeStatus={handleChangeStatus}
    accept="image/*,audio/*,video/*"
    initialFiles={initialValues[id] ? initialValues[id] : []}
    maxFiles={1}
    {...onValueChanged}
  />
}
