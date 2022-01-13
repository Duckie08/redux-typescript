import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelectore } from "../hooks/useTypeSelector";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelectore(
    (state) => state.repositories
  );
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      hello
      <form onSubmit={onSubmit}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};
export default RepositoriesList;
