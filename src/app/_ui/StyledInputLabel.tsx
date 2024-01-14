import { InputLabel, InputLabelProps } from "@mui/material";
import styled from "@mui/material/styles/styled";

export const StyledInputLabel = styled(({ ...props }: InputLabelProps) => (
  <InputLabel sx={{ fontSize: 16, fontWeight: 300 }} {...props} />
))``;
