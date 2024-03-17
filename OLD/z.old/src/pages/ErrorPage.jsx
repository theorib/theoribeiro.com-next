import HeaderMain from '../components/layout/HeaderMain';
import FooterMain from '../components/layout/FooterMain';
import ErrorBoundary from '../components/ui/ErrorBoundary';

function ErrorPage() {
  return (
    <>
      <HeaderMain />
      <main>
        <ErrorBoundary />
      </main>
      <FooterMain />
    </>
  );
}

export default ErrorPage;
