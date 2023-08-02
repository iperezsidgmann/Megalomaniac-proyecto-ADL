import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar, DetailProduct } from './components/index'
import { HomePage, LoginPage, SignupPage } from './views/index'


function App() {


    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/detail/:id" element={<DetailProduct />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
