import { Box, SxProps, Theme, Typography, TextField, Button } from "@mui/material";

export const Main = () => {
    return (
        <Box className="Main" sx={sx}>
            <Box className="LoginBox">
                <Typography className="LoginText" variant="h3">Login</Typography>
                <Box className="TextBox">
                    <Typography>メールアドレス</Typography>
                    <TextField></TextField>
                    <Typography>パスワード</Typography>
                    <TextField></TextField>
                </Box>
                <Button className="LoginButton">Login</Button>
            </Box>
        </Box>
    );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
    "&.Main": {
        width: "100%",
    },
    ".LoginBox": {
        width: "500px",
        height: "600px",
        margin: "50px auto",
        backgroundColor: "#999999",
    },
    ".LoginText": {
        textAlign: "center",
        margin: "20px",
        color: "#FFF",
    },
    ".TextBox": {
        textAlign: "center",
    }
};