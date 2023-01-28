import CSS from "./Input.module.css";

export default function Input({ ...props }) {
	return <input className={CSS.input} {...props} />;
}
