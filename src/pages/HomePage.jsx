import FooterComponent from "../components/FooterComponent";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";

function HomePage() {
  return (
    <>
      <Jumbotron/>
      <div className="pt-5"><SearchBar/></div>
      <FooterComponent/>
    </>
    
  )
}

export default HomePage