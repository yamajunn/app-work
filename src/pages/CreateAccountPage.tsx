import { Box, SxProps, Theme } from "@mui/material";
import { Header } from "../modules/create/Header";
import { Main } from "../modules/create/Main";

export const CreateAccountPage = () => {
    return (
        <Box className="CreateAccountPage" sx={sx}>
            <Header />
            <Main />
        </Box>
    );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
    "&.CreateAccountPage": {
        width: "100%",
        height: "100vh",
        backgroundColor: "#808080",
    }
};