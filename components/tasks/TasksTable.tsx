import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
import Link from 'next/link';
import tasks from '@/data/tasks';
import { Task } from '@/types/tasks';

interface PostsTableProps {
  limit?: number;
  title?: string;
}

const TasksTable = ({ limit, title }: PostsTableProps) => {
  // Sort posts in dec order based on date
  const sortedPosts: Task[] = [...tasks].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Filter posts to limit
  const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

  return (
    <div className='mt-10'>
      <h3 className='text-2xl mb-4 font-semibold'>{title ? title : 'Tasks by the Community'}</h3>
      <Table>
        <TableCaption>A list of recent tasks to do</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className='hidden md:table-cell'>Author</TableHead>
            <TableHead className='hidden md:table-cell'>Points</TableHead>
            <TableHead className='hidden md:table-cell text-right'>
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell className='hidden md:table-cell'>
                {task.author}
              </TableCell>
              <TableCell className='hidden md:table-cell'>
                {task.points}
              </TableCell>
              <TableCell className='text-right hidden md:table-cell'>
                {task.date}
              </TableCell>
              <TableCell>
                <Link href={`/tasks/edit/${task.id}`}>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TasksTable;
