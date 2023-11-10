import { useState } from 'react';

import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Layout, Popover, Space, Typography, Grid, Button, Tooltip, Dropdown } from 'antd';
import clsx from 'clsx';
import { useMatches, useNavigate } from 'react-router-dom';

import logo from '@assets/images/logo.png';
import { HEADER_MENU, TWITTER_AUTHOR_LINK } from '@root/constants';
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

  const handleRedirectTwitter = () => {
    window.open(TWITTER_AUTHOR_LINK, '_blank');
  };

  const handleChange = ({ key }: any) => {
    switch (key) {
      default:
        return navigate(getTwitterPath());
    }
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  const MenuHeader = () => (
    <Space direction="horizontal" size="small">
      {HEADER_MENU.map((item) => (
        <Typography
          key={item.key}
          onClick={() => handleNavigate(item.href, item.disabled)}
          className={clsx('font-semibold text-base ml-10', {
            author: activeKey === item.key,
            'cursor-pointer': !item.disabled,
          })}
        >
          {item.label}
        </Typography>
      ))}
    </Space>
  );

  return (
    <Header className="flex items-center justify-between xl:px-32 bg-transparent h-14">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className={clsx('h-6 cursor-pointer')}
          onClick={() => navigate(getTwitterPath())}
        />

        {md ? (
          <MenuHeader />
        ) : (
          <Dropdown
            trigger={['click']}
            menu={{
              items: HEADER_MENU,
              defaultSelectedKeys: [activeKey],
              onClick: handleChange,
            }}
          >
            <Button type="primary" className="ml-4" icon={<MenuUnfoldOutlined />} />
          </Dropdown>
        )}
      </div>

      <div className="flex items-center">
        <Tooltip title="Twitter">
          <Icon
            icon="ri:twitter-x-fill"
            className="cursor-pointer"
            fontSize={20}
            onClick={handleRedirectTwitter}
          />
        </Tooltip>

        <Tooltip title="Cài đặt">
          <Popover
            trigger="click"
            content={<SettingWeb handleClose={() => setOpenSetting(false)} />}
            open={openSetting}
            placement="topRight"
            onOpenChange={setOpenSetting}
          >
            <Icon icon="uil:setting" fontSize={28} className="cursor-pointer ml-4" />
          </Popover>
        </Tooltip>
      </div>
    </Header>
  );
}
