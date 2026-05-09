const Checkbox = ({ name, isChecked, event }) => {
  return (
    <div className={`checkbox${isChecked ? ' checkbox--active' : ''}`}>
      <button className="checkbox__button" onClick={() => event(!isChecked)}>
        <span className="checkbox__track" />
        <span className="checkbox__title">{name}</span>
      </button>
    </div>
  );
};

export default Checkbox;