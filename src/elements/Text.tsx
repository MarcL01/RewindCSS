import React from "@rbxts/react";
import RewindElement from "./RewindElement";
import { ReactInstancePropsWithRef } from "../types";
import { pick } from "../utils/pick";

type TextProps = ReactInstancePropsWithRef<TextBox> & {
	className?: string;
	Text?: string;
	Event?: React.InstanceEvent<TextLabel> | undefined;
	ref?: React.RefObject<TextLabel>;
};

export default function Text(props: TextProps) {
	const [{ className = "", Text = "", Event, ref, children }, restProps] = pick(props, [
		"className",
		"Text",
		"Event",
		"ref",
		"children",
	]);
	return (
		<RewindElement
			elementPropsOverride={{ ref, Event, Text, ...restProps }}
			tagName="text"
			className={className}
			children={children}
		/>
	);
}
