# react-layout

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

6 компонентов для базовой верстки.

## Usage


```javascript

import {Header, Layout, Footer, Content, Container, Column } from  "@crpt/crpt-react-library";

```

Layout всегда контейнер верхнего уровня.


```html
     <Layout>
        <Header>Header Content</Header>
        <Content>Main Content</Content>
        <Footer>Footer Content</Footer>
     <Layout/>
```

Layout можно бесконечно вкладывать.


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

У компонентов Header, Layout, Footer, Content нет специальных props.


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
| gutter: Number | Расстояние между внутренними `<Column/>` в пикселях. |  `<Container gutter={16}>`<br/>`<Column></Column>`<br/>`<Column></Column>`<br/>`</Container>` |
| justify: String | Значение align-items, позволяет выровнять по высоте или растянуть на всю высоту. |  `<Container justify="stretch">`<br/>`<Column></Column>`<br/>`<Column></Column>`<br/>`</Container>` |



### Column

| PropName | Описание | Пример |
|---|---|---|
| col: Number | Ширина в юнитах.<br/>Ширина контейнера 24 юнита.<br/>Если не указывать это значение, то `<Column/>` заполнит все свободное пространство. |  `<Container>`<br/>`<Column></Column>`<br/>`<Column col={6}></Column>`<br/>`</Container>` |



[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
