import CSS from "./Modal.module.css";

export default function Modal({ children, modal, setModal }) {
	const defaultClasses = [CSS.modal];

	if (modal) {
		defaultClasses.push(CSS.active);
	}

	return (
		<div
			className={defaultClasses.join(" ")}
			onClick={() => setModal(false)}
		>
			<div className={CSS.body} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}
