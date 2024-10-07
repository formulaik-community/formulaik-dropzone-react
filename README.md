# Formulaik-DropZone React component library

[![NPM](https://img.shields.io/npm/v/@formulaik-community/formulaik-dropzone-react.svg)](https://www.npmjs.com/package/formulaik-dropzone-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Visit [The Formulaik project](https://formulaik-core.github.io/documentation/) to get started with Formulaik.

This a Formulaik components library for `react-dropzone`.
Formulaik components are a set of inputs compatible with a Formulaik engine.
In this case, the Formulaik-DropZone library is made for the [Formulaik React engine](https://github.com/formulaik-core/react).

![](https://formulaik-core.github.io/documentation/img/icon_xs.svg)

> [The Formulaik project](https://formulaik-core.github.io/documentation/) is an open source initiative for defining cross-platform forms, enabling reusable components in a JSON based declarative approach. Formulaik aims to simplify form building across various front-end frameworks. Formulaik defines a protocol for defining form inputs as a sole source of truth (data type, behaviour, validation) in json, which is interpreted by a platform-specific formulaik engine.

## Install

1. Install the React formulaik engine

```bash
npm install @formulaik/react
```

2. Install the components library

```bash
npm install @formulaik-community/formulaik-dropzone-react
```

## Usage

Create your inputs and create the form using formulaik:

```jsx
  ...
  const inputs = [
    {
      component: 'dropzone',
      id: 'files',
      label: 'Files',
      params: {
        accept: "image/*,audio/*,video/*",
        maxFiles: 10
      }
    },
  ]
  ......
```

## Components

| Component Key     | Description              | Parameters |
| ------------------- | -------------------------- | ------------ |
| `files`           | File inputs               | #TODO      |

## Versionning

This repository follows the semantic branching model.

## Contributors
[<img src="https://github.com/adoucoure.png" width="60px;"/>
<br />
<sub>
<a href="https://github.com/adoucoure">Aboubacar Doucouré</a>
</sub>](https://adoucoure.com/formulaik)

This project follows the [all-contributors specification](https://github.com/all-contributors/all-contributors). Contributions of any kind welcome!
Please [contact me](https://adoucoure.com/contact) if you want to contribute to the core frameworks or add a components library.


## License

MIT © [yelounak](https://github.com/yelounak)

## References

- [The Formulaik project documentation](https://formulaik-core.github.io/documentation/)
- [Getting started with Formulaik React 🚀](https://formulaik-core.github.io/documentation/docs/next/gettingstarted/react/installation)
- [Contribute to Formulaik](https://formulaik-core.github.io/documentation/docs/next/contributing)
- [Forumaik Blog](https://adoucoure.com/formulaik)
