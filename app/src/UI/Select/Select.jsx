import CSS from "./Select.module.css";

export default function Select({ defaultOption, options, ...props }) {
	return (
		<div style={{ margin: "10px 0" }}>
			<select className={CSS.select} defaultValue="" {...props}>
				<option value="" disabled>
					{defaultOption}
				</option>
				{options.map((opt) => {
					return (
						<option key={opt.name} name={opt.name}>
							{opt.value}
						</option>
					);
				})}
			</select>
		</div>
	);
}
