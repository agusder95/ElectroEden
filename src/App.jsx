import { useEffect, useState } from "react";
import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import MyRoutes from "./routes/MyRoutes";
import Resolution from "./pages/Error/Resolution/resolution";
import { AppWrapper } from "./styles";

function App() {
  return (
    <>
      <AppWrapper>
        <Header />
        <Content>
          <MyRoutes />
        </Content>
        <Footer />
      </AppWrapper>
      <Resolution />
    </>
  );
}

export default App;
