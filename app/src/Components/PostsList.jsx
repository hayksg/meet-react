import Post from "./Post";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function PostsList({ posts, setPosts }) {
	return (
		<div style={{ marginTop: 15 }}>
			<TransitionGroup>
				{posts.map((post, index) => {
					return (
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames="post"
						>
							<Post
								post={post}
								index={index}
								setPosts={setPosts}
								posts={posts}
							/>
						</CSSTransition>
					);
				})}
			</TransitionGroup>
		</div>
	);
}
