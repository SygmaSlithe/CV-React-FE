import "./App.css";
import Navbar from "./components/Navbar";
import NewUserForm from "./components/NewUserForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";

function App() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "93vh" }}>
        {/* <Navbar /> */}
        <LandingPage />
        {/* <NewUserForm /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
