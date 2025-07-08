import React from "@rbxts/react";
import RewindElement from "./RewindElement";

type ButtonProps = React.PropsWithChildren<{
	className?: string;
	Event?: React.InstanceEvent<TextButton> | undefined;
	Text?: string;
	ref?: React.RefObject<TextButton>;
}>;

export default function Button({ className = "", Event, Text = "", ref }: ButtonProps) {
	return <RewindElement ref={ref} Event={Event} Text={Text} tagName="button" className={className} />;
}
