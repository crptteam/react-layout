# react-page-layout

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Layout components pack.

## Usage


```javascript

import { Header, Layout, Footer, Content, Container, Column, InlineWrap } from  "@crpt/react-page-layout";

```

Layout is allways a top level component.


```html
     <Layout>
        <Header>Header Content</Header>
        <Content>Main Content</Content>
        <Footer>Footer Content</Footer>
     <Layout/>
```

Layout can be inset indefinitely.


```html
     <Layout>
        <Header>Header Content</Header>
        <Content>

            <Layout>
                <Header>Header Content</Header>
                <Content>Main Content</Content>
                <Footer>Footer Content</Footer>
            <Layout/>

        </Content>
        <Footer>Footer Content</Footer>
     <Layout/>
```

Header, Layout, Footer and Content components have no special props.


### Container

```html
     <Container gutter={16} justify="stretch">
        <Column col={6}>Content</Column>
        <Column>Content</Column>
        <Column col={6}>Content</Column>
     <Container/>
```

| PropName | Описание | Пример |
|---|---|---|
| gutter: Number | Spacing between `<Column/>` in pixels. |  `<Container gutter={16}>`<br/>`<Column></Column>`<br/>`<Column></Column>`<br/>`</Container>` |
| justify: String | align-items flex value. |  `<Container justify="stretch">`<br/>`<Column></Column>`<br/>`<Column></Column>`<br/>`</Container>` |



### Column

| PropName | Описание | Пример |
|---|---|---|
| col: Number | Width in units. Maximum value: 24. If not set, fills all remaining space. |  `<Container>`<br/>`<Column></Column>`<br/>`<Column col={6}></Column>`<br/>`</Container>` |



[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
