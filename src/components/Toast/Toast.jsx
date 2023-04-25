import React from "react";
import { DefaultToast } from "./DefaultToast";
import { InteractiveToast } from "./InteractiveToast";

export function Toast() {
  return (
    <>
      <DefaultToast />
      <InteractiveToast />
    </>
  );
}
