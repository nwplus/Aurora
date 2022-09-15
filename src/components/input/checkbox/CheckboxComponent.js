import styled from 'styled-components';
import React from 'react'
import { Checkbox } from '@mui/material';

import { colors } from "../../colors/Colors";

const CheckboxComponent = (props) => {

    switch(props.variant) {
      case "control":
        alert(props.active)
        return (
          <Checkbox
          defaultChecked
          sx={{
            bgcolor: 'transparent',
            color: `${colors.white}`,
            '&.Mui-checked': {
              color: `${colors.emerald400}`,
            },
            '&:hover': {
              bgcolor: 'transparent',
              color: `${colors.emerald400}`,
            }
          }}
        />
        )

        default: // PLACEHOLDER DEFAULT CHECKBOX
          return (
            <Checkbox defaultChecked
            sx={{
              bgcolor: 'transparent',
              color: `${colors.white}`,
              '&.Mui-checked': {
                color: `#000`,
              },
              '&:hover': {
                bgcolor: 'transparent',
                color: `#000`,
              }
            }}
          />
          )
    }

}

export default CheckboxComponent;