import { Helmet } from 'react-helmet';
import { Outlet, useMatches } from 'react-router-dom';

export default function EmptyLayout() {
  const matches = useMatches();
  const crumbs = matches.filter((match) => !!match.handle);
  const pageTitle = (crumbs?.at(-1)?.handle as any)?.pageTitle;

  return (
    <>
      <Helmet>
        <title>Code4A - {pageTitle}</title>
      </Helmet>

      <Outlet />
    </>
  );
}
