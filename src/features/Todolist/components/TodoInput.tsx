type InputProps = {
  value: string;
  onChange: any;
  onClick: () => void;
};

const TodoInput = ({ value, onChange, onClick }: InputProps) => {
  return (
    <div className="w-11/12 h-14 py-2.5 px-1.5 border border-solid border-black flex justify-between absolute left-5 bottom-5">
      <input
        className="w-4/5 h-full border-none outline-none text-base font-extrabold"
        type="text"
        value={value}
        placeholder="Value"
        onChange={onChange}
      />
      <button
        className="p-1.5 bg-slate-800 text-white border-none rounded-md text-lg"
        onClick={onClick}
      >
        INSERT
      </button>
    </div>
  );
};

export default TodoInput;
