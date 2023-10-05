import { Icon } from '@iconify/react';
import { Button, Typography } from 'antd';

import { TwitterCardProps } from '@root/interfaces';

export default function TwitterCard({ data }: TwitterCardProps) {
  const handleViewGuide = () => {
    window.open(data.href, '_blank');
  };
  return (
    <div
      className="bg-bg-light dark:bg-bg-dark-1 shadow-md border border-gray-200 rounded-lg max-w-md 
   dark:border-gray-700 cursor-pointer"
    >
      <div className="p-5 h-[500px] relative">
        <Typography className="text-xl font-bold">{data.title}</Typography>
        <Typography>{data.description}</Typography>
        <div className="text-right">
          <Typography.Text
            className="text-xl"
            copyable={{
              text: data.content,
              tooltips: ['Sao chép Code', 'Đã sao chép'],
            }}
          />
        </div>
        <img className="rounded-t-lg w-full mt-3" src={data.imgCode} alt={data.title} />
        <Button
          type="primary"
          className="flex items-center absolute left-5 bottom-5"
          onClick={handleViewGuide}
        >
          Đọc hướng dẫn
          <Icon icon="material-symbols:read-more" fontSize={20} className="ml-1" />
        </Button>
      </div>
    </div>
  );
}
