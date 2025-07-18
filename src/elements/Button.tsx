import React from "@rbxts/react";
import RewindElement from "./RewindElement";
import { ReactInstancePropsWithRef } from "../types";
import { pick } from "../utils/pick";

type ButtonProps = ReactInstancePropsWithRef<TextButton> & {
	className?: string;
	Event?: React.InstanceEvent<TextButton> | undefined;
	Text?: string;
	ref?: React.RefObject<TextButton>;
};

export default function Button(props: ButtonProps) {
	const [{ className = "", Event, Text = "", ref, children }, restProps] = pick(props, [
		"className",
		"Event",
		"Text",
		"ref",
		"children",
	]);
	return (
		<RewindElement
			elementPropsOverride={{ ref, Event, Text, ...restProps }}
			tagName="button"
			className={className}
			children={children}
		/>
	);
}
