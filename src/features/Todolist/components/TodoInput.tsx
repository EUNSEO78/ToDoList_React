import "../styles/TodoInput.css";

type InputProps = {
  value: string;
  onChange: any;
  onClick: () => void;
};

const TodoInput = ({ value, onChange, onClick }: InputProps) => {
  return (
    <div className="inputContainer">
      <input
        className="inputBox"
        type="text"
        value={value}
        placeholder="Value"
        onChange={onChange}
      />
      <button className="inputBtn" onClick={onClick}>
        INSERT
      </button>
    </div>
  );
};

export default TodoInput;
