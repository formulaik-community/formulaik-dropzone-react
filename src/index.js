import Dropzone from './dropzone'

export default (props) => {
  const { type } = props
  switch (type) {
    case 'dropzone':
      return Dropzone
    default:
      return null
  }
}
