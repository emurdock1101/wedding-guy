import * as React from "react";

// import { Button,  } from '@material-ui/core';
import Button, { ButtonProps } from "@mui/material/Button";

import { styled } from "@mui/material/styles";

interface ColoredButtonProps {
  backgroundHex?: string;
  hoverHex?: string;
  textHex?: string;
}

const ColorButton: React.FC<ColoredButtonProps> = (props: ColoredButtonProps) => {
  const StyledButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: props.textHex ?? theme.palette.common.white,
    backgroundColor: props.backgroundHex ?? theme.palette.primary.main,
    "&:hover": {
      backgroundColor: props.backgroundHex ?? theme.palette.primary.dark,
    },
  }));

  return <StyledButton variant="contained"/>;
};

export default ColorButton;
