import Navbar from "./Navbar";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <Navbar />
      <main className="p-4">
        <h2 className="text-2xl font-semibold">Welcome to the Dark Mode App</h2>
        <p className="mt-2">Switch the theme using the button above.</p>
      </main>
    </div>
  );
};
export default App
