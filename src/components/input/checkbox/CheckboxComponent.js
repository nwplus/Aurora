import React, { useState, useEffect } from "react";
import { Checkbox } from "@mui/material";

import { colors } from "../../colors/Colors";

const CheckboxComponent = ({ disabled, variant }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (disabled) setChecked(false);
  }, [disabled]);

  switch (variant) {
    case "control":
      return (
        <Checkbox
          checked={checked}
          sx={{
            bgcolor: "transparent",
            color: `${colors.white}`,
            "&.Mui-checked": {
              color: `${colors.emerald400}`,
            },
            "&:hover": {
              bgcolor: "transparent",
              color: `${colors.emerald400}`,
            },
          }}
          disabled={disabled}
          onClick={() => setChecked(!checked)}
        />
      );

    default:
      // PLACEHOLDER DEFAULT CHECKBOX
      return (
        <Checkbox
          defaultChecked
          sx={{
            bgcolor: "transparent",
            color: `${colors.white}`,
            "&.Mui-checked": {
              color: `#000`,
            },
            "&:hover": {
              bgcolor: "transparent",
              color: `#000`,
            },
          }}
        />
      );
  }
};

export default CheckboxComponent;
