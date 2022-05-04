import PostListItem from "./post-list-item/PostListItem";
import { ListGroup } from "reactstrap";
import "./PostList.css";

const PostList = ({ posts, onDelete }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ListGroup key={id} className="list-group-item">
        <PostListItem {...itemProps} onDelete={() => onDelete(id)} />
      </ListGroup>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default PostList;
