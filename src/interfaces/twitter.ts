export interface TwitterPost {
  imgUrl: string;
  id: number;
  title: string;
  description: string;
}

export interface TwitterCardProps {
  data: TwitterPost;
}
