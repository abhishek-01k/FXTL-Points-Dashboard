import TasksTable from '@/components/tasks/TasksTable';
import BackButton from '@/components/BackButton';
import TasksPagination from '@/components/tasks/TasksPagination';

const TasksPage = () => {
  return (
    <>
      <BackButton text='Go Back' link='/' />
      <TasksTable />
      <TasksPagination />
    </>
  );
};

export default TasksPage;
