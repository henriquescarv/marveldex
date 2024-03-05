import React, { useState } from "react";
import * as Styles from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox = ({label = 'checkbox label', isChecked, onChange}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <Styles.Label>
      <Styles.Checkbox
        type="checkbox"
        checked={checked}
        onChange={handleChange} 
      />
      {label}
    </Styles.Label>
  )
};

export default Checkbox;
