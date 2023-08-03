import { Box, SxProps, Theme } from "@mui/material";
import { Header } from "../modules/post/Header";
import { Main } from "../modules/post/Main";

export const PostPage = () => {
    return (
        <Box className="PostPage" sx={sx}>
            <Header />
            <Main />
        </Box>
    );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
    "&.PostPage": {
        width: "100%",
        height: "100vh",
        backgroundColor: "#808080",
    }
};