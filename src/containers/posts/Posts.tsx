import { useQuery } from '@apollo/client';
import { GET_POSTS } from 'src/gql/query';

export const Posts = () => {
  const { data, loading, error } = useQuery(GET_POSTS, {
    fetchPolicy: 'cache-first',
  });

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  if (!data || !data.postList.length) {
    return <div>No data</div>;
  }

  return (
    <div>
      {data.postList.map((item: any) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};
