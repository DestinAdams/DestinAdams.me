// src/RoutesComponent.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import HourlyApp from "@/components/HourlyApp";

export default function RoutesComponent() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hourly" element={<HourlyApp />} />
        </Routes>
    );
}
