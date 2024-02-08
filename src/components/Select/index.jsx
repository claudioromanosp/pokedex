import styled from "styled-components";
import { colors, breakpoint } from "../../components/Layout/Variables";

export const SelectInput = styled.select`
  padding: 10px 20px;
  border: 1px solid ${(props) => colors.red};
  width: 100%;
  border-radius: 40px;
  color: ${colors.red};
  background-color: ${(props) => colors.white};
  @media (min-width: ${(props) => breakpoint.sm}px) {
    width: 220px;
  }
`;

const Select = ({ id, value, options, onChange, className }) => {
  return (
    <SelectInput id={id} value={value} onChange={onChange} className={className}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectInput>
  );
};

export default Select;
