type PostListProps<T> = {
  data: T[];
  clickDetail: (detail: T) => undefined;
};

const PostList = <V extends any>(props: PostListProps<V>) => {
  return null;
};

const App = () => {
  return (
    <PostList
      data={[
        { id: 1, title: "a" },
        { id: 2, title: "b" },
      ]}
      clickDetail={(detail) => {
        console.log(detail);
      }}
    />
  );
};
