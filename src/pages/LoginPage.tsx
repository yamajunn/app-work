import { Box, SxProps, Theme } from "@mui/material";

import { Header } from "../modules/login/Header";
import { Main } from "../modules/login/Main";

export const LoginPage = () => {
    return (
        <Box className="LoginPage" sx={sx}>
            <Header />
            <Main />
        </Box>
    );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
    "&.LoginPage": {
        width: "100%",
        height: "100vh",
        backgroundColor: "#808080",
    }
};