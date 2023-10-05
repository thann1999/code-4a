import { Icon } from '@iconify/react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { TwitterCardProps } from '@root/interfaces';

export default function TwitterCard({ data }: TwitterCardProps) {
  // const navigate = useNavigate();

  const handleNavigatePostDetail = () => {
    // navigate(data.id);
  };
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className="bg-bg-light dark:bg-bg-dark-1 shadow-md border border-gray-200 rounded-lg max-w-sm 
   dark:border-gray-700 cursor-pointer"
      onClick={handleNavigatePostDetail}
    >
      <img
        className="rounded-t-lg w-full h-64"
        src="https://flowbite.com/docs/images/blog/image-1.jpg"
        alt={data.title}
      />
      <div className="p-5 h-40 relative">
        <Typography className="text-xl font-bold">{data.title}</Typography>
        <Typography>{data.description}</Typography>
        <Button type="primary" className="flex items-center mt-3 absolute left-5 bottom-5">
          Đọc thêm
          <Icon icon="material-symbols:read-more" fontSize={20} className="ml-1" />
        </Button>
      </div>
    </div>
  );
}
