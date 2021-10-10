import React from "react";

import { Label, Input } from "./Filter.styled.jsx";

export const Filter = ({ value, onChange }) => (
  <Label>
    Find contacts by name
    <Input type="text" value={value} onChange={onChange} />
  </Label>
);
