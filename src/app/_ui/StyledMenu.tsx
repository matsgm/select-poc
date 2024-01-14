import { Menu, MenuProps } from "@mui/material";
import styled from "@mui/material/styles/styled";

export const StyledMenu = styled(({ ...props }: MenuProps) => (
  <Menu
    MenuListProps={{ sx: { padding: 0 } }}
    sx={{ marginTop: "0.25rem" }}
    {...props}
  />
))``;
