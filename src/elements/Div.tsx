import React from "@rbxts/react";
import RewindElement from "./RewindElement";
import { ReactInstancePropsWithRef } from "../types";
import { pick } from "../utils/pick";

type DivProps = ReactInstancePropsWithRef<Frame> & {
	className?: string;
	Event?: React.InstanceEvent<Frame> | undefined;
	ref?: React.RefObject<Frame>;
};

export default function Div(props: DivProps) {
	const [{ ref, Event, className, children }, restProps] = pick(props, ["ref", "Event", "className", "children"]);
	return (
		<RewindElement
			elementPropsOverride={{ ref, Event, ...restProps }}
			tagName="div"
			className={className}
			children={children}
		/>
	);
}
