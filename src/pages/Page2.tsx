
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import axios from 'axios';
import DepartmentList from '../components/DepartmentList';

interface Post {
  id: number;
  title: string;
  body: string;
}

const Page2 = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div>
      <h1>Page 2</h1>
      {loading? (
        <p>Loading...</p>
      ) : (
        <DataGrid rows={posts} columns={columns} />
      )}
      <DepartmentList />
    </div>
  );
};

export default Page2;