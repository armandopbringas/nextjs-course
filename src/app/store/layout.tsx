import React, { ReactNode } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <nav>Navegación por categorías</nav>
      {children}
    </main>
  );
};

export default Layout;
