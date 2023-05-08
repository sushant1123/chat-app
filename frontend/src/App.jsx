import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChatsPage from "./pages/ChatsPage";
import SingleChat from "./pages/SingleChat";
import ErrorBoundary from "./components/ErrorBoundary";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ChatProvider />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//         errorElement: <ErrorBoundary />,
//       },
//       {
//         path: "chats",
//         element: <ChatsPage />,
//         errorElement: <ErrorBoundary />,
//       },
//       {
//         path: "/chats/:id",
//         element: <SingleChat />,
//         errorElement: <ErrorBoundary />,
//       },
//     ],
//   },
// ]);

function App() {
  return (
    <div className="app">
      {/* <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="chats" Component={ChatsPage} />
        <Route path="chats/:id" Component={SingleChat} />

        <Route path="*" Component={ErrorBoundary} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chats" element={<ChatsPage />} />
        <Route path="chats/:id" element={<SingleChat />} />
        <Route path="*" element={<ErrorBoundary />} />
      </Routes>
    </div>
  );
}

export default App;
