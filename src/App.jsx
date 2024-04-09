import Content from "./components/Content/content";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <div style={{overflowX: 'hidden', height: '100vh'}}>
      <Header />
      <Content>
        <MyRoutes />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
