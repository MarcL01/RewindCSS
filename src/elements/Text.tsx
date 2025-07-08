import React from "@rbxts/react";
import RewindElement from "./RewindElement";

type TextProps = React.PropsWithChildren<{
	className?: string;
	Text?: string;
	Event?: React.InstanceEvent<TextLabel> | undefined;
	ref?: React.RefObject<TextLabel>;
}>;

export default function Text({ className = "", Text = "", Event, ref }: TextProps) {
	return <RewindElement ref={ref} Event={Event} tagName="text" Text={Text} className={className} />;
}
