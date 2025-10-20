import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen transition-colors duration-500 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow flex items-center justify-center p-4">
        <Home />
      </main>
      <Footer />
    </div>
  );
}
