import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

export default function CreatePost({
	newPost,
	setNewPost,
	setPosts,
	posts,
	setModal
}) {
	function addPost(e) {
		e.preventDefault();
		if (newPost.title && newPost.body) {
			setPosts([...posts, { id: Date.now(), ...newPost }]);
			setModal(false);
			setNewPost({ title: "", body: "" });
		}
	}

	return (
		<form>
			<Input
				type="text"
				placeholder="Input title"
				onChange={(e) =>
					setNewPost({ ...newPost, title: e.target.value })
				}
				value={newPost.title}
			/>
			<Input
				type="text"
				placeholder="Input text"
				onChange={(e) =>
					setNewPost({ ...newPost, body: e.target.value })
				}
				value={newPost.body}
			/>
			<Button onClick={(e) => addPost(e)}>Add post</Button>
		</form>
	);
}
