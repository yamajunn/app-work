import { Box, SxProps, Theme } from "@mui/material";
export const CreateAccountPage = () => {
    return (
        <Box className="CreateAccountPage" sx={sx}>
        </Box>
    );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
    "&.CreateAccountPage": {
    }
};