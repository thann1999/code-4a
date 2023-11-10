import { Icon } from '@iconify/react';
import { Button, Typography } from 'antd';
import clsx from 'clsx';
import { Highlight, themes } from 'prism-react-renderer';

import { TwitterCardProps } from '@root/interfaces';

export default function TwitterCard({ data }: TwitterCardProps) {
  const handleViewGuide = () => {
    window.open(data.href, '_blank');
  };
  return (
    <div
      className="bg-bg-light dark:bg-bg-dark-1 shadow-md border border-gray-200 rounded-lg max-w-md 
   dark:border-gray-700"
    >
      <div className="p-5 h-[34rem] relative">
        <Typography className="text-xl font-bold">{data.title}</Typography>
        <Typography className="mt-2">{data.description}</Typography>
        <div className="text-right mb-2">
          <Typography.Text
            className="text-xl"
            copyable={{
              text: data.content,
              tooltips: ['Sao chép Code', 'Đã sao chép'],
            }}
          />
        </div>
        <Highlight language="js" theme={themes.dracula} code={data.content}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={clsx(className, 'h-80 rounded-lg text-sm')} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

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
