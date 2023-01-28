import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<div className="navbar">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/posts">Posts</Link>
						</li>
						<li>
							<Link to="/about">About us</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Outlet />
		</>
	);
};

export default Layout;
