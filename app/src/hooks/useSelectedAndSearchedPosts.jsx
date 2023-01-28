import { useMemo } from "react";

export function useSelectedPosts(selectedPosts, posts) {
	const selected = useMemo(
		function () {
			if (selectedPosts) {
				return posts.sort((a, b) =>
					a[selectedPosts].localeCompare(b[selectedPosts])
				);
			} else {
				return posts;
			}
		},
		[selectedPosts, posts]
	);

	return selected;
}

export function useSelectedAndSearchedPosts(
	selectedPosts,
	posts,
	searchedPosts
) {
	const selected = useSelectedPosts(selectedPosts, posts);
	const selectedAndSearched = useMemo(
		function () {
			if (searchedPosts) {
				return posts.filter((post) =>
					post.title.includes(searchedPosts)
				);
			} else {
				return selected;
			}
		},
		[searchedPosts, selected]
	);

	return selectedAndSearched;
}
