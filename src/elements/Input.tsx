import React from "@rbxts/react";
import RewindElement from "./RewindElement";

type InputProps = React.PropsWithChildren<{
	className?: string;
	Text?: string;
	Event?: React.InstanceEvent<TextBox> | undefined;
	ref?: React.RefObject<TextBox>;
	placeholder?: string;
}>;

export default function Input({ className = "", Text = "", Event, ref, placeholder = "" }: InputProps) {
	return (
		<RewindElement
			placeholder={placeholder}
			ref={ref}
			Event={Event}
			tagName="input"
			Text={Text}
			className={className}
		/>
	);
}
