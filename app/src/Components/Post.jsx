import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";

export default function Post({ post, index, setPosts, posts }) {
	const navigate = useNavigate();

	function deletePost(ID) {
		setPosts(posts.filter((post) => post.id !== ID));
	}

	return (
		<div className="post">
			<div>
				<small>#{index + 1}</small>
				<br />
				<strong>ID: {post.id}</strong>
				<h2>{post.title}</h2>
				<div>{post.body}</div>
			</div>
			<div className="btns-wrap">
				<Button onClick={() => navigate(`/posts/${post.id}`)}>
					Read more
				</Button>
				<Button onClick={() => deletePost(post.id)}>Delete</Button>
			</div>
		</div>
	);
}
