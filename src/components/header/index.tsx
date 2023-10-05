import { useState } from 'react';

import { MenuUnfoldOutlined, MoreOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Layout, Popover, Space, Typography, Grid, Button } from 'antd';
import clsx from 'clsx';
import { useMatches, useNavigate } from 'react-router-dom';

import logo from '@assets/images/logo.png';
import { HEADER_MENU } from '@root/constants';
import { getTwitterPath } from '@root/utils';

import SettingWeb from '../setting-web/SettingWeb';

const { useBreakpoint } = Grid;
const { Header } = Layout;

export default function HeaderComponent() {
  const [openSetting, setOpenSetting] = useState(false);
  const navigate = useNavigate();
  const matches = useMatches();
  const { md } = useBreakpoint();
  const queryMatches = matches.filter((item) => !!item.handle);
  const activeKey = (queryMatches.filter((item) => !!(item.handle as any)?.key)[0]?.handle as any)
    ?.key;

  const handleNavigate = (href: string, isDisabled?: boolean) => {
    if (isDisabled) return;

    navigate(href);
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const MenuHeader = () => (
    <Space direction="horizontal" size="small">
      {HEADER_MENU.map((item) => (
        <Typography
          key={item.key}
          onClick={() => handleNavigate(item.href, item.isDisabled)}
          className={clsx('font-semibold text-base ml-10', {
            author: activeKey === item.key,
            'cursor-pointer': !item.isDisabled,
          })}
        >
          {item.label}
        </Typography>
      ))}
    </Space>
  );

  return (
    <Header className="flex items-center justify-between xl:px-32 bg-transparent h-20">
      <div className="flex">
        <img
          src={logo}
          alt="logo"
          className={clsx('h-10 cursor-pointer', { 'mt-2': md })}
          onClick={() => navigate(getTwitterPath())}
        />

        {md ? (
          <MenuHeader />
        ) : (
          <Button type="primary" className="ml-4" icon={<MenuUnfoldOutlined />} />
        )}
      </div>

      <div className="flex items-center">
        <Popover
          trigger="click"
          content={<SettingWeb handleClose={() => setOpenSetting(false)} />}
          open={openSetting}
          placement="topRight"
          onOpenChange={setOpenSetting}
        >
          <Icon icon="uil:setting" fontSize={28} className="cursor-pointer mt-0.5 ml-4" />
        </Popover>
      </div>
    </Header>
  );
}
