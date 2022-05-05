import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import ManageInventories from "./components/ManageInventories/ManageInventories";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Login from "./socialmedia/Login/Login";
import Signup from "./socialmedia/Signup/Signup";
import RequireAuth from "./socialmedia/RequireAuth/RequireAuth";
import MyItems from "./components/MyItems/MyItems";
import AddNewItem from "./components/AddNewItem/AddNewItem";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<Inventory></Inventory>}></Route>
        <Route
          path="/inventory/:inventoryId"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route
          path="/manage/:manageId"
          element={<ManageInventories></ManageInventories>}
        ></Route>
        <Route path="/myItem" element={<MyItems></MyItems>}></Route>
        <Route path="/addnewitem" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
