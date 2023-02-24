import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

export default {
  title: "form/Subscription",
};

export const PrimarySubscription = () => (
  // 아래와 같이 두 개 이상의 컴포넌트를 합쳐 하나의 컴포넌트로 구성할 수도 있음
  // 유용하지만 args mechanism을 사용할 수 없다는 단점도 있음
  <>
    <Large />
    <Primary />
  </>
);
