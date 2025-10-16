import { Outlet } from "react-router";

import Footer from "./../components/Footer";
import Header from "./../components/Header";

export default function RootLayout() {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </div>
  );
}

function Main({ children }) {
  return <main>{children}</main>;
}
