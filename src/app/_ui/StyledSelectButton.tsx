import { Button, ButtonProps, Stack, styled } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

interface StyledSelectButton extends ButtonProps {
  open: boolean;
}

export const StyledSelectButton = styled(
  ({ children, open, ...props }: StyledSelectButton) => (
    <Button variant="contained" {...props}>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ width: "100%" }}
      >
        {children} {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}{" "}
      </Stack>
    </Button>
  ),
)`
  background: ${(props) =>
    props.open ? "rgba(183, 250, 172, 1)" : "rgba(0, 0, 0, 0.05)"};
  border-radius: 16px;
  border-width: 0px;
  box-shadow: none;
  color: rgba(0, 0, 0, 1);
  font-family: var(--font-lato);
  font-size: 20px;
  font-weight: 300;
  height: 48px;
  justify-content: space-between;
  letter-spacing: 0em;
  line-height: 24px;
  padding: 0px 16px;
  text-transform: none;
  width: 535px;
  :hover {
    background: rgba(0, 0, 0, 0.05);
    box-shadow: none;
  }
  :focus {
    background: rgba(183, 250, 172, 1);
  }
`;
