import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsService from "../API/PostsService";
import { useFetching } from "../hooks/useFetching";

export default function PostIdPage() {
	const params = useParams();
	const [post, setPost] = useState({});
	const [fetchPostById, loader, error] = useFetching(async () => {
		const response = await PostsService.getById(params.id);
		setPost(response.data);
	});

	useEffect(() => {
		fetchPostById();
	}, []);

	return (
		<div>
			{error && <h2>{error}</h2>}

			{loader ? (
				<h2 style={{ marginTop: 15 }}>The posts are loading...</h2>
			) : (
				<div>
					<h1> {post.title} </h1>
					<p> {post.body} </p>
				</div>
			)}
		</div>
	);
}
