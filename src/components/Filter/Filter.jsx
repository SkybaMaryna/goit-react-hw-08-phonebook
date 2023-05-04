import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-6 flex-col w-1/3 p-5 border-blue-600 border-2 rounded-lg">
      <p className="text-center text-2xl font-bold">Find contacts by name</p>
      <input
        className="border px-2 outline-none"
        type="text"
        onChange={e => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};
