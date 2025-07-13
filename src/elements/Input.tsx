import React from "@rbxts/react";
import RewindElement from "./RewindElement";
import { ReactInstancePropsWithRef } from "../types";
import { pick } from "../utils/pick";

type InputProps = ReactInstancePropsWithRef<TextBox> & {
	className?: string;
	Text?: string;
	Event?: React.InstanceEvent<TextBox> | undefined;
	ref?: React.RefObject<TextBox>;
	placeholder?: string;
};

export default function Input(props: InputProps) {
	const [{ className = "", Text = "", Event, ref, placeholder = "", children }, restProps] = pick(props, [
		"className",
		"Text",
		"Event",
		"ref",
		"placeholder",
		"children",
	]);
	return (
		<RewindElement
			elementPropsOverride={{ ref, Event, Text, PlaceholderText: placeholder, ...restProps }}
			tagName="input"
			className={className}
			children={children}
		/>
	);
}
