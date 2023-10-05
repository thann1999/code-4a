import { Icon } from '@iconify/react';
import { FloatButton, Layout, Tooltip, Typography } from 'antd';
import clsx from 'clsx';
import { Helmet } from 'react-helmet';
import { Outlet, useMatches } from 'react-router-dom';

import { HeaderComponent } from '@root/components';
import { TWITTER_AUTHOR_LINK, ThemeMode } from '@root/constants';
import { useThemeStore } from '@root/services/store';

import './default-layout.scss';

export default function EmptyLayout() {
  const matches = useMatches();
  const crumbs = matches.filter((match) => !!match.handle);
  const pageTitle = (crumbs?.at(-1)?.handle as any)?.pageTitle;
  const appTheme = useThemeStore((state) => state.appTheme);
  const isDarkTheme = appTheme === ThemeMode.Dark;

  const handleRedirectTwitter = () => {
    window.open(TWITTER_AUTHOR_LINK, '_blank');
  };

  return (
    <div className={clsx('min-h-screen', { 'bg-dark': isDarkTheme, 'bg-light': !isDarkTheme })}>
      <Helmet>
        <title>RetroactiveVN - {pageTitle}</title>
      </Helmet>

      <HeaderComponent />

      <div className="mx-[50px] xl:mx-32 page-content">
        <Outlet />
      </div>

      <Layout.Footer className="text-center bg-transparent">
        <Typography className="text-base font-semibold">
          RetroactiveVN ©2023 Created by{' '}
          <Typography.Link className="author --italic" href={TWITTER_AUTHOR_LINK} target="_blank">
            David Nguyen
          </Typography.Link>
        </Typography>
      </Layout.Footer>

      <Tooltip title="Theo dõi" placement="right">
        <FloatButton
          shape="square"
          badge={{ dot: true }}
          className="float-twitter-button"
          icon={<Icon icon="ri:twitter-x-fill" fontSize={20} className="text-white" />}
          onClick={handleRedirectTwitter}
        />
      </Tooltip>
    </div>
  );
}
