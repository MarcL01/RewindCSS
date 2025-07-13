import React from "@rbxts/react";
import RewindElement from "./RewindElement";
import { ReactInstancePropsWithRef } from "../types";
import { pick } from "../utils/pick";

type ImageButtonProps = ReactInstancePropsWithRef<ImageButton> & {
	className?: string;
	Event?: React.InstanceEvent<TextButton> | undefined;
	ref?: React.RefObject<TextButton>;
};

export default function ImageButton(props: ImageButtonProps) {
	const [{ className = "", Event, ref, children }, restProps] = pick(props, [
		"className",
		"Event",
		"ref",
		"children",
	]);
	return (
		<RewindElement
			elementPropsOverride={{ ref, Event, ...restProps }}
			tagName="imageButton"
			className={className}
			children={children}
		/>
	);
}
