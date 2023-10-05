import { Space } from 'antd';

import { TWITTER_POST } from '@root/constants/json-data';

import TwitterCard from './components/TwitterCard';

export default function TwitterPage() {
  return (
    <Space direction="horizontal" align="center" className="justify-center w-full mt-20">
      {TWITTER_POST.map((item) => (
        <TwitterCard data={item} key={item.id} />
      ))}
    </Space>
  );
}
