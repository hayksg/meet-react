import CSS from "./Button.module.css";

export default function Button({ children, ...props }) {
	return (
		<button className={CSS.button} {...props}>
			{children}
		</button>
	);
}
