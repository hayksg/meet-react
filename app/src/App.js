import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import About from "./pages/About";
import PostIdPage from "./pages/PostIdPage";
import Error from "./pages/Error";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route exact path="/posts" element={<Posts />} />
					<Route exact path="/posts/:id" element={<PostIdPage />} />
					<Route path="*" element={<Error />} />
				</Route>
			</Routes>
		</Router>
	);
}
