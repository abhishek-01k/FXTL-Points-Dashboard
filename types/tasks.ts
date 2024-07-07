export interface Task {
  id: string;
  title: string;
  body: string;
  points: number;
  author: string;
  date: string;
  comments?: TaskComment[];
}

export interface TaskComment {
  id: string;
  text: string;
  username: string;
}
