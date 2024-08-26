import s from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { FormEvent } from 'react';

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;  
      const query = form.query.value.trim();
      if (!query) {
        toast.error('Please enter a value to search for!');
        return;
      }
      onSubmit(query);
    };
    
    return (
      <header className={s.wrapper}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">Search</button>
        </form>
      </header>
    )
}

export default SearchBar;