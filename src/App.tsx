import { Global } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reset from "./style/reset";
import { Main } from "./page/Main";
import { Splash } from "./page/Splash";
import { KakaoRedirection } from "./page/KakaoRedirection";

function App() {
  return (
    <BrowserRouter>
      <Global styles={reset} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/kakao/callback" element={<KakaoRedirection />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
