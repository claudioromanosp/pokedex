const Select = ({ id, value, options, onChange, className }) => {
  return (
    <select id={id} value={value} onChange={onChange} className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
