import { MenuItem, MenuItemProps } from "@mui/material";
import styled from "@mui/material/styles/styled";

export const StyledMenuItem = styled(({ ...props }: MenuItemProps) => (
  <MenuItem {...props} />
))`
  height: auto;
  padding: 11px 15px;
  gap: 15px;
  :hover,
  :focus {
    background: rgba(183, 250, 172, 1);
  }
`;
