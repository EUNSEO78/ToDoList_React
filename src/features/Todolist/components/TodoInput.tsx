type InputProps = {
  value: string;
  onChange: (e) => void;
  onClick: () => void;
};

const TodoInput = ({ value, onChange, onClick }: InputProps) => {
  return (
    <div className="w-11/12 h-14 py-2.5 px-1.5 border-4 border-solid border-white flex justify-between absolute left-5 bottom-5 ">
      <input
        className="w-4/5 h-full border-none outline-none text-base font-extrabold bg-transparent text-white"
        type="text"
        value={value}
        placeholder="Value"
        onChange={onChange}
      />
      <button
        className="p-1.5 bg-white text-slate-800 border-none rounded-md text-md font-bold"
        onClick={onClick}
      >
        Add +
      </button>
    </div>
  );
};

export default TodoInput;
