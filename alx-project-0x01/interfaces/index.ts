export interface PostCardProps {
    title: string;
    author: string;
    date: string;
    content: string;
    imageUrl?: string;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

