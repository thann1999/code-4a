import { TWITTER_POST } from '@root/constants/json-data';

import TwitterCard from './components/TwitterCard';

export default function TwitterPage() {
  return (
    <div className="justify-center flex items-center w-full min page-content">
      {TWITTER_POST.map((item) => (
        <TwitterCard data={item} key={item.id} />
      ))}
    </div>
  );
}
