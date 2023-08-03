import { Box, SxProps, Theme, Typography, TextField, Button } from "@mui/material";

export const Main = () => {
    return (
        <Box className="Main" sx={sx}>
            <Box className="LoginBox">
                <Typography className="LoginText" variant="h3">Create Account</Typography>
                <Box className="TextBox">
                    <Typography>メールアドレス</Typography>
                    <TextField className="Text" ></TextField>
                    <Typography>パスワード</Typography>
                    <TextField className="Text"></TextField>
                </Box>
                <Button className="LoginButton" href="/piano">
                    <Typography variant="h5">Create</Typography>
                </Button>
                <Box></Box>
                <Button className="CreateButton" href="/login">
                    <Typography variant="h5">Login</Typography>
                </Button>
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
        backgroundColor: "#998899",
        textAlign: "center",
    },
    ".LoginText": {
        textAlign: "center",
        margin: "0 0 100px",

    },
    ".TextBox": {
        textAlign: "center",
        margin: "0 0 100px",
    },
    ".Text": {
        backgroundColor: "#FFF",
    },
    ".LoginButton": {
        color: "#FFF",
        backgroundColor: "#303030",
    },
    ".CreateButton": {
        margin: "10px",
        color: "#FFF",
        backgroundColor: "#303030",
    },
};