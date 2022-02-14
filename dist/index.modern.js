import React from 'react';
import Dropzone$1 from 'react-dropzone-uploader';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Dropzone = (function (props) {
  var customOnValueChanged = props.customOnValueChanged,
      initialValues = props.initialValues,
      _props$item = props.item,
      id = _props$item.id,
      itemProps = _props$item.props;

  var handleChangeStatus = function handleChangeStatus(fileWithMeta, status, allFilesWithMeta) {
    var items = allFilesWithMeta.map(function (item) {
      if (item.meta.status === 'removed') {
        return null;
      }

      return item.file;
    }).filter(function (a) {
      return a;
    });
    customOnValueChanged(items);
  };

  return /*#__PURE__*/React.createElement(Dropzone$1, _extends({
    onChangeStatus: handleChangeStatus,
    accept: "image/*,audio/*,video/*",
    initialFiles: initialValues[id] ? initialValues[id] : [],
    maxFiles: 1
  }, itemProps));
});

var index = (function (props) {
  var type = props.type;

  switch (type) {
    case 'dropzone':
      return Dropzone;

    default:
      return null;
  }
});

export default index;
//# sourceMappingURL=index.modern.js.map
