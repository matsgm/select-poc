import { Typography, TypographyProps } from "@mui/material";
import styled from "@mui/material/styles/styled";

export const StyledTypography = styled(({ ...props }: TypographyProps) => (
  <Typography {...props} />
))`
  font-family: var(--font-lato);
`;
