import "./AppHeader.css";

const AppHeader = ({ liked, allPosts }) => {
  return (
    <div className="app-header d-flex">
      <h1>John Rambo</h1>
      <h2>
        Посты: {allPosts}, Понравилось: {liked}
      </h2>
    </div>
  );
};

export default AppHeader;
