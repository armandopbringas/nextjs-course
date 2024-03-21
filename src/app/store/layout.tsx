import Header from "@app/components/Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
