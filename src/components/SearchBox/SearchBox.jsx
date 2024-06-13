import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/selectors";


export default function SearchBox() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input className={css.inputSearch}
        type="text"
        name="search"
        id="search"
        value={filter.name}
        onChange={handleChangeInput}
      ></input>
    </div>
  );
}
