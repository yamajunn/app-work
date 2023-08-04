import { Box, SxProps, Theme, Typography, TextField, Button } from "@mui/material";
import { isWhiteSpaceLike } from "typescript";

export const Main = () => {
    return (
        <Box className="Main" sx={sx}>
            <Box className="LoginBox">
                <Typography className="LoginText" variant="h3">Post</Typography>
                <Box className="TextBox">
                    <Typography className="Text-namae">タイトル</Typography>
                    <TextField className="Text" ></TextField>
                    <Typography className="Text-namae">説明</Typography>
                    <TextField className="Text-setumei" multiline maxRows={4}></TextField>
                    <Typography className="Text-namae">ファイル選択</Typography>
                    <input type="file" accept="json/*" />
                </Box>
                <Button className="LoginButton" href="/piano">
                    <Typography variant="h5">Post</Typography>
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
        backgroundColor: "#999988",
        textAlign: "center",
    },
    ".LoginText": {
        textAlign: "center",
        margin: "0 0 50px",

    },
    ".TextBox": {
        textAlign: "center",
        margin: "0 0 100px",
    },
    ".Text": {
        backgroundColor: "#FFF",
        width: "400px",
    },
    ".Text-setumei": {
        backgroundColor: "#FFF",
        width: "400px",
        "& .MuiInputBase-root": {
            height: 100
        },
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
    ".Text-namae": {
        margin: "10px",
    }
};