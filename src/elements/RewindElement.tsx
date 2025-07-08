import React, { useEffect, useRef, useState } from "@rbxts/react";
import { ClassName } from "../types";
import { ElementContext } from "../ElementContext";
import Flex from "../components/Flex";
import Padding from "../components/Padding";
import Border from "../components/Border";
import Rounded from "../components/Rounded";
import getElementProps from "../utils/getElementProps";
import Overflow from "../components/Overflow";
import BgImage from "../components/BgImage";
import Aspect from "../components/Aspect";
import Scale from "../components/Scale";
import MinMaxSize from "../components/MinMaxSize";

type RewindProps = React.PropsWithChildren<{
	tagName: "div" | "button" | "text" | "input";
	className?: string;
	Text?: string;
	Event?:
		| React.InstanceEvent<Frame>
		| React.InstanceEvent<TextButton>
		| React.InstanceEvent<TextLabel>
		| React.InstanceEvent<TextBox>
		| undefined;
	ref?: React.RefObject<Frame | TextButton | TextLabel | TextBox>;
	placeholder?: string;
}>;

export default function RewindElement(props: RewindProps) {
	const classList = (props.className ?? "").split(" ") as ClassName[];
	const [hovered, setHovered] = useState<Frame | TextButton | TextLabel | TextBox | undefined>();
	const elementProps = getElementProps(
		[...classList, (hovered ? "+hovered" : "-hovered") as unknown as ClassName],
		props,
	);
	const elementRef = props.ref || useRef<Frame | TextButton | TextLabel | TextBox>();

	useEffect(() => {
		if (!elementRef.current) return;
		if (!classList.some((className) => className.match("^hover").size() > 0)) return;

		const onHover = elementRef.current.MouseEnter.Connect(() => {
			setHovered(elementRef.current);
		});
		const onLeave = elementRef.current.MouseLeave.Connect(() => {
			setHovered(undefined);
		});

		return () => {
			onHover.Disconnect();
			onLeave.Disconnect();
		};
	}, [elementRef]);

	return (
		<ElementContext.Provider
			value={{
				classList: [...classList, (hovered ? "+hovered" : "-hovered") as unknown as ClassName],
			}}
		>
			{props.tagName === "div" && (
				<frame
					Event={(props.Event as React.InstanceEvent<Frame>) || {}}
					ref={elementRef as React.Ref<Frame>}
					{...elementProps}
				>
					<Overflow>
						<Padding />
						<Flex />
						{props.children}
					</Overflow>
					<Aspect />
					<Scale />
					<Border />
					<Rounded />
					<MinMaxSize />
				</frame>
			)}
			{props.tagName === "button" && (
				<textbutton
					Event={(props.Event as React.InstanceEvent<TextButton>) || {}}
					ref={elementRef as React.Ref<TextButton>}
					{...elementProps}
				>
					<Overflow>
						<Padding />
						<Flex />
						{props.children}
					</Overflow>
					<Scale />
					<Aspect />
					<Rounded />
					<MinMaxSize />
				</textbutton>
			)}
			{props.tagName === "text" && (
				<textlabel
					Event={(props.Event as React.InstanceEvent<TextLabel>) || {}}
					ref={elementRef as React.Ref<TextLabel>}
					{...elementProps}
				>
					<Overflow>
						<Padding />
						<Flex />
						{props.children}
					</Overflow>
					<Scale />
					<Aspect />
					<Rounded />
					<MinMaxSize />
				</textlabel>
			)}
			{props.tagName === "input" && (
				<textbox
					PlaceholderText={props.placeholder}
					Event={(props.Event as React.InstanceEvent<TextBox>) || {}}
					ref={elementRef as React.Ref<TextBox>}
					{...elementProps}
				>
					<Overflow>
						<Padding />
						<Flex />
						{props.children}
					</Overflow>
					<Scale />
					<Aspect />
					<Rounded />
					<MinMaxSize />
				</textbox>
			)}
		</ElementContext.Provider>
	);
}
