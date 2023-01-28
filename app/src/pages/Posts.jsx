import { useEffect, useMemo, useState } from "react";
import PostsList from "../Components/PostsList";
import CreatePost from "../Components/CreatePost";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Select from "../UI/Select/Select";
import PostsService from "../API/PostsService";
import { useSelectedAndSearchedPosts } from "../hooks/useSelectedAndSearchedPosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, pagesArray } from "../utils/pages";

export default function Posts() {
	const [pageTitle, setPostsTitle] = useState("Posts lists");
	const [posts, setPosts] = useState([]);
	const [newPost, setNewPost] = useState({ title: "", body: "" });
	const [modal, setModal] = useState(false);
	const [selectedPosts, setSelectedPosts] = useState("");
	const [searchedPosts, setSearchedPosts] = useState("");
	const [totalPages, setTotalPages] = useState("");
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	const [fetchPosts, loader, error] = useFetching(async () => {
		const response = await PostsService.getAll(limit, page);
		setPosts(response.data);
		setTotalPages(getPageCount(response.headers["x-total-count"], limit));
	});

	const pages = pagesArray(totalPages);

	function updatePage(p) {
		setPage(p);
	}

	useEffect(
		function () {
			fetchPosts();
		},
		[page]
	);

	// async function fetchPosts() {
	// 	if (loader) {
	// 		setTimeout(async function () {
	// 			const data = await PostsService.getAll();
	// 			setPosts(data);
	// 			setLoader(false);
	// 		}, 2000);
	// 	}
	// }

	const selectedAndSearched = useSelectedAndSearchedPosts(
		selectedPosts,
		posts,
		searchedPosts
	);

	return (
		<div className="App">
			<h1 style={{ marginBottom: 20 }}>{pageTitle}</h1>

			<Button onClick={() => setModal(true)}>Add post</Button>

			<Modal modal={modal} setModal={setModal}>
				<CreatePost
					newPost={newPost}
					setNewPost={setNewPost}
					setPosts={setPosts}
					posts={posts}
					setModal={setModal}
				/>
			</Modal>

			<Select
				defaultOption="Select by"
				options={[
					{ name: "title", value: "title" },
					{ name: "body", value: "body" }
				]}
				onChange={(e) => setSelectedPosts(e.target.value)}
			/>

			<Input
				type="text"
				placeholder="search"
				onChange={(e) => setSearchedPosts(e.target.value)}
			/>

			{error && <h2>{error}</h2>}

			{loader ? (
				<h2 style={{ marginTop: 15 }}>The posts are loading...</h2>
			) : selectedAndSearched.length ? (
				<PostsList posts={selectedAndSearched} setPosts={setPosts} />
			) : (
				<h2 style={{ marginTop: 15 }}>The posts list is empty</h2>
			)}

			{pages.map((p) => {
				return (
					<Button
						key={p}
						className={p === page ? "page page-current" : "page"}
						onClick={() => updatePage(p)}
					>
						{p}
					</Button>
				);
			})}
		</div>
	);
}
