import peliculas from '../../services/MOVIES_DATA.json';
import './Peliculas.css';
import Card from '../../components/Card/Card.jsx';

function Peliculas() {
  return (
    <>
      <div className="navbar">
        <h1 className="text-center secondary">Peliculas</h1>
      </div>
      <div className="container">
        <div className="fondo">
          {peliculas.map((pelicula) => {
            return (
              <div className="cards">
                <Card key={pelicula.id} {...pelicula} />;
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Peliculas;
