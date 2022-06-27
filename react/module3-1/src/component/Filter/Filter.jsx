const Filter = ({ onChange }) => (
  <>
    <label>Find contacts by name</label>
    <input type="text" name="filter" onChange={onChange} />
  </>
);
export default Filter;
