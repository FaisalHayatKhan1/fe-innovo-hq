
// ----------------------------------------------------------------------

export default function SearchNotFound({ searchQuery = "", ...other }) {
  return searchQuery ? (
    <div {...other}>
      <div  >
        Not found
      </div>
      <div  >
        No results found for &nbsp;
        <strong>&quot;{searchQuery}&quot;</strong>. Try checking for typos or
        using complete words.
      </div>
    </div>
  ) : (
    <div > Please enter keywords</div>
  );
}
