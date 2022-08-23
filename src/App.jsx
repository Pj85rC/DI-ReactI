import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS


import Badge from "react-bootstrap/Badge";

function App() {
  return (
    <>
      <section className="containerCards">
        <Header title="Galería de Imágenes con React" />

        <div className="card">
          <Card
            style={{ width: "18rem" }}
            picture="https://images.pexels.com/photos/5029084/pexels-photo-5029084.jpeg"
            title="Felpa#1"
            description="Poderoso ronroneo"
          />
        </div>
        <div className="card">
          <Card
            style={{ width: "18rem" }}
            picture="http://placekitten.com/g/200/300"
            title="Felpa#2"
            description="Masajeador profesional"
          />
        </div>
        <div className="card">
          <Card
            style={{ width: "18rem" }}
            picture="http://placekitten.com/g/200/300"
            title="Felpa#3"
            description="Maullido hipersónico"
          />
        </div>
      </section>
      <Footer className="footer" footer="Todos los derechos reservados" />
      <h3>
        <Badge pill bg="dark">
          ###®
        </Badge>
      </h3>
    </>
  );
}

export default App;
