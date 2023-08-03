// MUIのコンポーネントをインポート、使用するものはここで定義
import { Box, SxProps, Theme } from "@mui/material";

// 使用するコンポートをインポート
import { Route, Routes } from "react-router-dom";
import { TopPage } from "./pages/TopPage";
import { SamplePage } from "./pages/SamplePage";
import { PianoPage } from "./pages/PianoPage";
import { LoginPage } from "./pages/LoginPage";
import { CreateAccountPage } from "./pages/CreateAccountPage";
import { PostPage } from "./pages/PostPage";

// Appのメインの実装（表示する画面とpathを定義）
export const App = () => {
  return (
    <Box className="App" sx={sx}>
      <Routes>
        {/* トップページ*/}
        <Route path="/" element={<TopPage />} />
        {/* サンプルページ */}
        <Route path="/sample" element={<SamplePage />} />
        {/* ピアノページ */}
        <Route path="/piano" element={<PianoPage />} />
        {/* ログインページ */}
        <Route path="/login" element={<LoginPage />} />
        {/* クリエイトページ */}
        <Route path="/create" element={<CreateAccountPage />} />
        {/* 投稿ページ */}
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.App": {
    width: "100%",
  }
};
