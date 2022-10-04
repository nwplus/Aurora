import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../colors/Colors';

const Label = styled.div``;

const CheckboxComponent = ({ disabled, variant, label }) => {
  const [checked, setChecked] = useState(false);
  console.log('label', disabled);

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
              color: `${colors.emerald400}`,
            },
            '&:disabled > span': {
              color: `gray`,
            },
          }}
          label={<Label>{label}</Label>}
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
                  color: disabled
                    ? `${colors.muiGray}`
                    : `${colors.emerald400}`,
                  transition: '300ms',
                },
              }}
              disabled={disabled}
              onClick={() => setChecked(!checked)}
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

export default CheckboxComponent;
