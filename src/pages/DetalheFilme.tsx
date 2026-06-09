import {
  useParams,
  useNavigate,
} from 'react-router-dom';
import { FILMES } from '../data/filmes';

function DetalheFilme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const filme = FILMES.find(
    (f) => f.id === Number(id)
  );

  if (!filme) {
    return <h2>Filme não encontrado.</h2>;
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
      >
        ← Voltar
      </button>

      <h1>{filme.titulo}</h1>

      <p>
        {filme.ano} • {filme.genero} •{' '}
        {filme.duracao} min
      </p>

      <p>{filme.sinopse}</p>
    </div>
  );
}

export default DetalheFilme;