import { Box, SxProps, Theme } from "@mui/material";
export const DetailPage = () => {
    return (
        <Box className="DetailPage" sx={sx}>
        </Box>
    );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
    "&.DetailPage": {
    }
};