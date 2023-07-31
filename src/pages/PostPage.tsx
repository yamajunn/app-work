import { Box, SxProps, Theme } from "@mui/material";
export const PostPage = () => {
    return (
        <Box className="PostPage" sx={sx}>
        </Box>
    );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
    "&.PostPage": {
    }
};