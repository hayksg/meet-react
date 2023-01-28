import React from "react";
import CSS from "./Input.module.css";

const InputRef = React.forwardRef((props, ref) => {
	return <input className={CSS.input} {...props} ref={ref} />;
});

export default InputRef;
