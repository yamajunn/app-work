import { Box, SxProps, Theme, Link, Typography } from "@mui/material";

export const TopPage = () => {
  return (
    <Box className="TopPage" sx={sx}>
      トップページ
      <Link href="/piano">
        <Typography variant="h3">PianoPage</Typography>
      </Link>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.TopPage": {
    width: "100%",
  },
};
