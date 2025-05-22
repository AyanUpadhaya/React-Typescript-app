import CommentWidgetEmbed from "./CommentWidgetEmbed";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      <main className="p-4 max-w-[800px] mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">Comment app</h2>
        <CommentWidgetEmbed pageId="home" />
      </main>
    </div>
  );
};
export default App;
