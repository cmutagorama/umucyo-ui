# Umucyo UI

[![CI](https://github.com/cmutagorama/umucyo-ui/actions/workflows/main.yml/badge.svg)](https://github.com/cmutagorama/umucyo-ui/actions/workflows/main.yml) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Umucyo UI is a design system of minimalistic, tree-shakable set of components. Used [TSDX](https://tsdx.io/) to scaffold this library which comes with [Storybook](https://storybook.js.org/) out of the box and [Tailwind CSS](https://tailwindcss.com/) for styling.

### Installing Umucyo UI

To use Umucyo UI components, all you need to do is install the `umucyo-ui` package:

```bash
$ npm i umucyo-ui
```

### Usage

To start using the components, import the component you want to use:

```javascript
import { Pagination } from 'umucyo-ui'

function Example() {
  return <Pagination />
}
```