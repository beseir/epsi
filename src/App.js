import {
    BrowserRouter,
    Routes,
    Route,
    Link, useNavigate,
} from 'react-router-dom';
import {Home} from "./components/Home";
import {Card} from "./components/Card";
import {NavPage} from "./components/NavPage";
import {useEffect} from "react";
import {Market} from "./components/Market";
import {Edit} from "./components/Edit";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                    <Route path="*" element={<Home />} />
                    <Route path="market" element={<Market />} />
                    <Route path="edit" element={<Edit />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
