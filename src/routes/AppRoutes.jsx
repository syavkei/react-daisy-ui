import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Hompage";
import Pokemon from "../pages/Pokemon";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="pokemon" element={<Pokemon />} />
        {/* <Route path="pokemon/:id" element={<PokemonDetail />} /> */}
      </Route>
    </Routes>
  );
}
