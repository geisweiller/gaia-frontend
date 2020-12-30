import { useSelector } from 'react-redux';
import { State } from '../../store';
import { SearchInterface } from '../../store/modules/search/types';
import './index.scss';

export default function NotFound() {
  const { search } = useSelector<State, SearchInterface>(state => state.search);

  return (
    <div className='notfound'>
      <p className='notfoundp'>{`Não foi possível encontrar resultados para '${search}'`}</p>
    </div>
  )
}
