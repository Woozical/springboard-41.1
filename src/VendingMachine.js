import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import image from './media/vending_machine_generated.jpg' 
import SNACK_DATA from './snack-data';
import Snack from './Snack';

const VendingMachine = () => {
  return (
    <div style={{backgroundImage : image}}>
      <h1>Welcome! Pick something to eat.</h1>
      <BrowserRouter>
      <div>
        <NavLink to="/"></NavLink>
        <NavLink to="/chips">Chips</NavLink>
        <NavLink to="/soda">Soda</NavLink>
        <NavLink to="/sardines">Sardines</NavLink>
      </div>
        <Routes>
          <Route path="/" element={<div></div>} />
          <Route path="/chips" element={
            <Snack name={SNACK_DATA.chips.name}
                   calories={SNACK_DATA.chips.calories}
                   price={SNACK_DATA.chips.price}
                   image={SNACK_DATA.chips.image}
            />}
          />
          <Route path="/soda" element={
            <Snack name={SNACK_DATA.soda.name}
                   calories={SNACK_DATA.soda.calories}
                   price={SNACK_DATA.soda.price}
                   image={SNACK_DATA.soda.image}
            />}
          />
          <Route path="/sardines" element={
            <Snack name={SNACK_DATA.sardines.name}
                   calories={SNACK_DATA.sardines.calories}
                   price={SNACK_DATA.sardines.price}
                   image={SNACK_DATA.sardines.image}
            />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default VendingMachine