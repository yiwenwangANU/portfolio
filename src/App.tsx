import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import PageNotFoundPage from "./pages/PageNotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/", element: <PortfolioPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/projects", element: <ProjectsPage /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },
    {
      path: "*",
      element: <PageNotFoundPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
