import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  select
} from '@storybook/addon-knobs/react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Content from '../components/Content';
import Layout from '../components/Layout';
import Column from '../components/Column';

const elements = storiesOf('Layout', module);

elements.addDecorator(withKnobs);

elements.add('All elements in one', () => {
return <div style={{height: "700px"}}>
  <Layout>
    <Header>Содержимое Header</Header>
    <Content>Основное содержимое, оно будет занимать все свободное место, насколько возможно. Если содержимого будет слишком много, Layout вырастет за пределы контейнера.

      <Container gutter={4} style={{background: "#fefffe", marginTop: "10px",  marginBottom: "10px"}}>
        <Column style={{background: "#cefece"}} col={4}>col-4 </Column>
        <Column style={{background: "#eeeefe"}} >no col, для Container добавлен gutter=4.</Column>
        <Column style={{background: "#feeefe"}} col={4}>col-4 <br/>Перенос строки, чтобы добавить высоты контейнера</Column>

      </Container>

    </Content>
    <Footer>Содержимое Footer</Footer>
  </Layout>
  </div>
});



