const Search = (props) => {
  return (
    <div className="search">
      <input
        class="form-control"
        type="text"
        placeholder="Search Notes..."
        aria-label="default input example"
        onChange={(event) => {
          props.search(event.target.value);
        }}
      ></input>
    </div>
  );
};

export default Search;
