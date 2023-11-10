export interface TwitterPost {
  id: number;
  title: string;
  description: string;
  href: string;
  content: string;
}

export interface TwitterCardProps {
  data: TwitterPost;
}
