import { Box, SxProps, Theme } from "@mui/material";
export const SearchPage = () => {
    return (
        <Box className="SearchPage" sx={sx}>
        </Box>
    );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
    "&.SearchPage": {
    }
};