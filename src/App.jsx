import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Workers from "./pages/Workers";
import WorkerProfile from "./pages/WorkerProfile";
import Booking from "./pages/Booking";
import BookingConfirmation from "./pages/BookingConfirmation";
import BecomeFundi from "./pages/BecomeFundi";

function App() {
  return (
    <>
      <Navbar />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/worker/:id" element={<WorkerProfile />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/become-fundi" element={<BecomeFundi />} />
      </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;