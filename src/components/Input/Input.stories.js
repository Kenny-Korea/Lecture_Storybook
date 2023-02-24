import React from "react";
import Input from "./Input";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => <Input variant="small" placeholder="small" />;
export const Medium = () => <Input variant="medium" placeholder="medium" />;
export const Large = () => <Input variant="large" placeholder="large" />;

// 아래와 같이 이름을 변경할 수도 있음
// ex)
// 많은 파일들에서 이미 해당 컴포넌트를 사용하고 있을 경우,
// 컴포넌트의 이름을 변경해버리면 이를 사용하고 있는 모든 파일에 컴포넌트명을 수정해줘야 함
// 하지만 아래와 같이 이름을 변경해주면 그렇지 않아도 됨
Small.storyName = "Small Input";
