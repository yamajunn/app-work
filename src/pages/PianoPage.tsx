// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Main } from "../modules/piano/Main";

// サンプルページのメインの実装
export const PianoPage = () => {
    return (
        <Box className="PianoPage" sx={sx}>
            {/* <Header /> */}
            <Main />
        </Box>
    );
};

// クラス名に対するスタイルを定義
const sx: SxProps<Theme> = {
    "&.PianoPage": {
        width: "100%",
    }
};
