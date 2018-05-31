import React from "react";
import { Layout, Header, Footer, Container, Content, Column } from "../src/";
import { mount } from "enzyme";

describe("Input", () => {
  it("Should renders without problems", () => {
    const wrapper = mount(
      <Layout>
        <Header>I am header.</Header>
        <Content>
          <Container>
            <Column>Column one.</Column>
            <Column>Column two.</Column>
            <Column>Column three.</Column>
          </Container>
        </Content>
        <Footer>I am footer.</Footer>
      </Layout>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
