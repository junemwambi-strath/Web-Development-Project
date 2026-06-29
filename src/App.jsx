import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Workers from "./pages/Workers";
import WorkerProfile from "./pages/WorkerProfile";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/worker/:id" element={<WorkerProfile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
      </Routes>
    </>
  );
}

export default App;