import { styled } from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ModelPage from "./pages/ModelPage";
import UserPage from "./pages/UserPage";
import CreateNewModel from "./pages/CreateNewModel";

export default function App() {

  return (
    <PagesContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/models/:id" element={<ModelPage />} />
            <Route path="/profile" element={<UserPage />} />
            <Route path="/creation" element={<CreateNewModel />} />
          </Routes>
        </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  width: 100vw;
  background-color: #D5B77A;
  min-height: 100vh;
`


