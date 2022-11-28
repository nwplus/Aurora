import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { colors } from '../../colors/Colors';

const CheckboxComponent = ({ disabled, variant, label, onClick }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (disabled) setChecked(false);
  }, [disabled]);

  switch (variant) {
    case 'control':
      return (
        <FormControlLabel
          sx={{
            color: checked ? `${colors.emerald400}` : `${colors.white}`,
            '&:hover > span': {
              color: disabled ? `${colors.muiGray}` : `${colors.emerald400}`,
            },
            '&:disabled > span': {
              color: `gray`,
            },
          }}
          label={<div>{label}</div>}
          control={
            <Checkbox
              checked={checked}
              sx={{
                bgcolor: 'transparent',
                color: `${colors.white}`,
                '&.Mui-checked': {
                  color: `${colors.emerald400}`,
                },
                '&:hover': {
                  bgcolor: 'transparent',
                  color: `${colors.emerald400}`,
                  transition: '300ms',
                },
              }}
              disabled={disabled}
              onClick={() => {
                setChecked(!checked);
                onClick(!checked);
              }}
            />
          }
        />
      );

    default:
      // PLACEHOLDER DEFAULT CHECKBOX
      return (
        <Checkbox
          defaultChecked
          sx={{
            bgcolor: 'transparent',
            color: `${colors.white}`,
            '&.Mui-checked': {
              color: `#000`,
            },
            '&:hover': {
              bgcolor: 'transparent',
              color: `#000`,
            },
          }}
        />
      );
  }
};

export { CheckboxComponent };
