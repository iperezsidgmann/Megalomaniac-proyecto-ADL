import { Route, Routes } from "react-router-dom"
import { LoginPage, SignupPage } from "../../views/index"
import { AppRoutes } from "../routes/AppRoutes"

export const AppRouter = () => {
    return (

        <>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="*" element={<AppRoutes/>} />
            </Routes>
        </>
    )
};
