import "./App.css";
import Navbar from "./components/Navbar";
import NewUserForm from "./components/NewUserForm";
// import SideBar from "./components/SideBar/SideBar";
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

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    // <div className="App" id="outer-container">
    //   <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
    //   <div id="page-wrap">
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
        {/* <Route path="/resume/:id" component={Resume}/> */}
        {/* <Route path="/addAch" component={()=> <AddAchievement />} /> */}

        {/* <NewUserForm /> */}
      </main>
      <Footer />
    </BrowserRouter>
    //   </div>
    // </div>
  );
}

export default App;
