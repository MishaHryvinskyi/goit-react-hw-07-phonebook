import { setFilter } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';
import { InputFilter } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <InputFilter
      type="text"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value.trim()))}
      placeholder="Find contacts by name"
    />
  );
}