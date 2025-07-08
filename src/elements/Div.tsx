import React from "@rbxts/react";
import RewindElement from "./RewindElement";

type DivProps = React.PropsWithChildren<{
	className?: string;
	Event?: React.InstanceEvent<Frame> | undefined;
	ref?: React.RefObject<Frame>;
}>;

export default function Div(props: DivProps) {
	return (
		<RewindElement ref={props.ref} Event={props.Event} tagName="div" className={props.className}>
			{props.children}
		</RewindElement>
	);
}
