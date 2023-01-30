import "./App.css";
import Profile from "./Profile/Profile";
import dell from "././assists/DELL.jpg";
function App() {
  const fullName = " Dell NASDAQ ";
  const bio =
    " Dell NASDAQ : DELL est une entreprise américaine connue pour être le plus grand fabricant d'ordinateurs au monde. Son siège est basé à Round Rock dans l'État du Texasil conçoit, fabrique et vend aux particuliers et aux professionnels, il est également présent sur les marchés de serveurs dentreprise, de systèmes de sauvegarde et stockage de données et du matériel spécifique aux réseaux informatiques. Dell propose également des logiciels et des périphériques comme des imprimantes, appareils photos numériques, et beaucoup dautres encore";
  const profession =
    "Associations professionnelles et organismes sans but lucratif de Dell · Conseiller achat Serveur · Dell Expert Network · Dell for Entrepreneurs.";
  const handleName = (al) => {
    alert(`welcome ${al}`);
  };
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio={bio}
        profession={profession}
        handleName={handleName}
      >
        <img src={dell} alt="dell" width={1200} height={600} />
      </Profile>
    </div>
  );
}

export default App;
