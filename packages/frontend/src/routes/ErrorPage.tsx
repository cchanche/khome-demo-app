import { useRouteError } from 'react-router-dom';
import Page from '../components/Page';

export default function ErrorPage() {
  const error = useRouteError() as Error & { statusText: string };
  console.error(error);

  return (
    <Page>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Page>
  );
}
