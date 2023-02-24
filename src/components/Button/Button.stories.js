import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
  // Hierarchical 하게 구성하고 싶을 경우, title에 "/" 를 붙여 구성할 수 있음
  title: "Form/Button",
  // optional이긴 하지만 하는 것을 추천함
  component: Button,
  args: {
    children: "Button",
  },
  // 각 컴포넌트에 하나씩 decorator를 wrapping할 수도 있지만
  // 아래와 같이 setting 영역에 decorator를 지정해주면 모든 컴포넌트에 decorator가 적용됨
  decorators: [(story) => <Center>{story()}</Center>],
};

export const Primary = () => (
  // Decorator: 다른 컴포넌트를 wrapping하는 컴포넌트 (<Center>)
  <Center>
    <Button variant="primary">Primary</Button>
  </Center>
);
export const Secondary = () => (
  <Center>
    <Button variant="secondary">Secondary</Button>
  </Center>
);
export const Success = () => (
  <Center>
    <Button variant="success">Success</Button>
  </Center>
);
export const Danger = () => (
  <Center>
    <Button variant="danger">Danger</Button>
  </Center>
);

// args mechanism을 따르면 코드의 간결성, 재사용성을 향상 시킬 수 있음
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: "primary",
  // children: "Primary Args",
};

export const LongPrimaryA = Template.bind({});
LongPrimaryA.args = {
  ...PrimaryA.args,
  // override 됨
  children: "Long Primary Args",
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: "secondary",
  // children: "Secondary Args",
};
