"use client";
import Head from "next/head";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const Layout: FC<Props> = ({ children }) => {
  return (
    <React.Fragment>
      <Head>{/* head */}</Head>
      <nav>{/* navbar */}</nav>
      <main style={{ padding: "20px 50px" }}>{children}</main>
    </React.Fragment>
  );
};
