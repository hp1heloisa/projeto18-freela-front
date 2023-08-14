import { styled } from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ModelPage from "./pages/ModelPage";
import UserPage from "./pages/UserPage";
import CreateNewModel from "./pages/CreateNewModel";
import BreedPage from "./pages/BreedPage";
import SearchPage from "./pages/SearchPage";

export default function App() {

  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/models/:id" element={<ModelPage />} />
            <Route path="/profile" element={<UserPage />} />
            <Route path="/creation" element={<CreateNewModel />} />
            <Route path="/breeds/:id" element={<BreedPage />} />
            <Route path="/search" element={<SearchPage />} />
            
          </Routes>
        </BrowserRouter>
  )
}



