export interface TwitterPost {
  imgCode: string;
  id: number;
  title: string;
  description: string;
  href: string;
  content: string;
}

export interface TwitterCardProps {
  data: TwitterPost;
}
