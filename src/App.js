import "./App.css";
import Activites from "./components/Activites/Activites";
import Banner from "./components/Banner/Banner";
import Copyright from "./components/Copyright/Copyright";
import Filtres from "./components/Filtres/Filtres";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hebergements from "./components/Hebergements/Hebergements";
import Info from "./components/Info/Info";
import Populaires from "./components/Populaires/Populaires";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="containerApp">
      <Header />
      <Banner />
      <SearchBar />
      <Filtres />
      <Info />
      <div className="hebergementsPopulaires">
        <Hebergements />
        <Populaires />
      </div>
      <Activites />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
