import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import SNACK_DATA from './snack-data';
import Snack from './Snack';
import './VendingMachine.css';

const SnackSelection = () => {
  return (
    <div className="VendingMachine-selection">
      <NavLink to="/chips">Chips</NavLink>
      <NavLink to="/soda">Soda</NavLink>
      <NavLink to="/sardines">Sardines</NavLink>
    </div>
  )
}
const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <h1>Welcome! Pick something to eat.</h1>
      <div className="VendingMachine-content">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<SnackSelection />} />
              <Route path="/chips" element={<Snack {...SNACK_DATA.chips} />} />
              <Route path="/soda" element={<Snack {...SNACK_DATA.soda} />} />
              <Route path="/sardines" element={<Snack {...SNACK_DATA.sardines} />} />
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  )
}

export default VendingMachine