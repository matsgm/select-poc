"use client";
import { Box, Stack } from "@mui/material";
import useDogBreeds, { DogBreed } from "./_resources/useDogBreeds";
import { useState } from "react";
import { FormControl } from "@mui/base/FormControl";
import { StyledSelectButton } from "./_ui/StyledSelectButton";
import { StyledMenu } from "./_ui/StyledMenu";
import { StyledMenuItem } from "./_ui/StyledMenuItem";
import { ellipseColors } from "./_utils/ellipse.helper";
import { StyledTypography } from "./_ui/StyledTypography";
import { StyledInputLabel } from "./_ui/StyledInputLabel";

export default function Page() {
  const { breeds } = useDogBreeds({});
  const [selectedBreed, setSelectedBreed] = useState<DogBreed>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (breed: DogBreed) => {
    setSelectedBreed(breed);
    setAnchorEl(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      gap={2}
      flexDirection="column"
      alignItems="center"
    >
      <FormControl>
        <StyledInputLabel id="dog-breed-select-label">
          Hunderase
        </StyledInputLabel>

        <StyledSelectButton
          onClick={handleClick}
          open={open}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Stack direction="row" alignItems="center">
            {selectedBreed?.name ? (
              <Stack direction="row" alignItems="center" gap={1}>
                <div
                  style={{
                    width: 22.4,
                    height: 22.4,
                    borderRadius: "50%",
                    background: ellipseColors(selectedBreed.id),
                  }}
                />
                {selectedBreed.name}
              </Stack>
            ) : (
              "Velg hunderase"
            )}
          </Stack>
        </StyledSelectButton>
        <StyledMenu
          id="basic-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
        >
          {breeds?.map((dogBreed) => (
            <StyledMenuItem
              key={dogBreed.id}
              value={dogBreed as any}
              onClick={() => handleMenuItemClick(dogBreed)}
              selected={dogBreed.id === selectedBreed?.id}
              sx={{ width: 535 }}
            >
              <Stack direction="row" alignItems="center" gap={2}>
                <div
                  style={{
                    width: 22.4,
                    height: 22.4,
                    borderRadius: "50%",
                    background: ellipseColors(dogBreed.id),
                  }}
                />
                <Stack>
                  <StyledTypography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                    }}
                  >
                    {dogBreed.name}
                  </StyledTypography>
                  <StyledTypography
                    sx={{
                      maxWidth: "465px",
                      fontSize: "20px",
                      fontWeight: 300,
                      lineHeight: "24px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      textOverflow: "ellipsis",
                    }}
                    noWrap
                  >
                    {dogBreed.temperament}
                  </StyledTypography>
                </Stack>
              </Stack>
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </FormControl>
    </Box>
  );
}
