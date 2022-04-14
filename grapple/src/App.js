import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./Screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyAchievements from "./Screens/MyAchievements/MyAchievements";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import CreateAch from "./Screens/CreateAch/CreateAch";
import SingleAch from "./Screens/SingleAch/SingleAch";
import { useState } from "react";
import LeaderBoard from "./Screens/LeaderBoard/LeaderBoard";
import Resume from "./components/Resume";

function App() {
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main style={{ minHeight: "93vh" }}>
        {/* <Navbar /> */}
        {/* <LandingPage /> */}

        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route
          path="/myachs"
          component={() => <MyAchievements search={search} />}
        />
        <Route path="/createAch" component={CreateAch} />
        <Route path="/ach/:id" component={SingleAch} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/resume/:id" component={Resume} />

        {/* <NewUserForm /> */}
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
