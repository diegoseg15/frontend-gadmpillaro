import React from "react";

export function LoginLayout(props) {
  const { children } = props;

  return <div className="relative h-screen w-screen">{children}</div>;
}
