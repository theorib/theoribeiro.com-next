import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
// import ErrorElement from './components/ui/ErrorMessage';
import { loader as portfolioLoader } from './features/expanging-gallery/ExpandingGallery';

export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
          loader: portfolioLoader,
        },
        {
          path: '/:expandingGalleryUrlParam',
          element: <HomePage />,
          loader: portfolioLoader,
        },
        {
          path: '/about-theo-ribeiro',
          element: <AboutPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
