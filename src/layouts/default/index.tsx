import { Layout, Typography } from 'antd';
import clsx from 'clsx';
import { Helmet } from 'react-helmet';
import { Outlet, useMatches } from 'react-router-dom';

import { HeaderComponent } from '@root/components';
import { TWITTER_AUTHOR_LINK, ThemeMode } from '@root/constants';
import { useThemeStore } from '@root/services/store';

import './default-layout.scss';

export default function EmptyLayout() {
  const appTheme = useThemeStore((state) => state.appTheme);
  const isDarkTheme = appTheme === ThemeMode.Dark;
  const matches = useMatches();
  const crumbs = matches.filter((match) => !!match.handle);
  const pageTitle = (crumbs?.at(-1)?.handle as any)?.pageTitle;

  return (
    <>
      <Helmet>
        <title>Code4A - {pageTitle}</title>
      </Helmet>

      <div className={clsx('min-h-screen', { 'bg-dark': isDarkTheme, 'bg-light': !isDarkTheme })}>
        <HeaderComponent />

        <div className="mx-[50px] xl:mx-32 page-content">
          <Outlet />
        </div>

        <Layout.Footer className="text-center bg-transparent p-0 h-20">
          <Typography className="text-base font-semibold">
            Code4A ©2023 Thiết kế bởi
            <Typography.Link
              className="author --italic ml-1.5"
              href={TWITTER_AUTHOR_LINK}
              target="_blank"
            >
              cmcglobal.eth
            </Typography.Link>
          </Typography>

          <Typography.Link href={TWITTER_AUTHOR_LINK} target="_blank" className="follow-me">
            Nếu thấy nội dung hay thì cho mình 1 Follow, Like, Repost trên X nha !!!
          </Typography.Link>
        </Layout.Footer>
      </div>
    </>
  );
}
