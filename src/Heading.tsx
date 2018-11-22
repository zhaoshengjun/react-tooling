import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export const Heading = ({ children }: Props) => <div>{children}</div>;
