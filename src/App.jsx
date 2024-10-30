import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#181C14] transition-colors duration-300">
      <Navbar />
      <main className="text-gray-700 dark:text-gray-200 p-8">
        <Header />
      </main>
    </div>
  );
}

export default App;
