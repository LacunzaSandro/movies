import './Card.css';

const Metascore = ({ puntaje }) => {
  const calculateBackgroundColor = (puntaje) => {
    return puntaje >= 0 && puntaje <= 49
      ? '#fa4443'
      : puntaje >= 50 && puntaje <= 59
      ? '#ffcd3e'
      : puntaje >= 60 && puntaje <= 100
      ? '#61c74f'
      : 'black'; //valor predeterminado
  };

  const fondo = calculateBackgroundColor(puntaje);
  const colorFont = (fondo) => {
    return fondo === 'yellow' ? 'black' : 'white';
  };
  const color = colorFont(fondo);
  const style = {
    background: fondo,
    color: color,
    padding: '1px 3px',
    margin: '1px 4px',
  };

  return <span style={style}>{puntaje}</span>;
};
function getYear(fecha) {
  const componentesFecha = fecha.split('/');
  const anio = componentesFecha[2];
  return parseInt(anio, 10);
}
function Card({
  poster,
  title,
  releaseDate,
  duration,
  maturity,
  genres,
  director,
  mainActors,
  plot,
  rating,
  metascore,
}) {
  return (
    <div className="titulo">
      <div className="card-content">
        <div className="image-left">
          <img src={poster} alt="Poster" />
        </div>
        <div className="text-right">
          <h3 className="p-4 secondary">{title}</h3>
          <div className="p-4">
            {getYear(releaseDate)} | {duration} | {maturity}
          </div>
          <div className="p-4">{genres.join(' - ')}</div>
          <div className="p-4 f-15">
            <i className="fas fa-star p-4 mr-4 bg-yellow" aria-hidden="true" />
            {rating}
            <i className="far fa-star mr-4 " aria-hidden="true" />
            Rate
            <Metascore puntaje={metascore} />
            Metascore
          </div>
          <span className="f-15 secondary">
            {director} | {mainActors}
          </span>
          <p>{plot}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
