import React, { useEffect, useRef, useState } from "@rbxts/react";
import { ClassName, ReactInstancePropsWithRef } from "../types";
import { ElementContext } from "../ElementContext";
import Flex from "../components/Flex";
import Padding from "../components/Padding";
import Border from "../components/Border";
import Rounded from "../components/Rounded";
import { getElementProps, RewindProps } from "../utils/getElementProps";
import Overflow from "../components/Overflow";
import BgImage from "../components/BgImage";
import Aspect from "../components/Aspect";
import Scale from "../components/Scale";
import MinMaxSize from "../components/MinMaxSize";

export default function RewindElement(props: RewindProps) {
	const classList = (props.className ?? "").split(" ") as ClassName[];
	const [hovered, setHovered] = useState<Frame | TextButton | TextLabel | TextBox | ImageButton | undefined>();
	const elementProps = getElementProps(
		[...classList, (hovered ? "+hovered" : "-hovered") as unknown as ClassName],
		props,
	);
	const elementRef =
		props.elementPropsOverride.ref || useRef<Frame | TextButton | TextLabel | TextBox | ImageButton>();

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
					ref={elementRef as React.Ref<Frame>}
					{...elementProps}
					{...(props.elementPropsOverride as ReactInstancePropsWithRef<Frame>)}
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
					ref={elementRef as React.Ref<TextButton>}
					{...elementProps}
					{...(props.elementPropsOverride as ReactInstancePropsWithRef<TextButton>)}
				>
					<Overflow>
						<Padding />
						<Flex />
						{props.children}
					</Overflow>
					<Scale />
					<Border />
					<Aspect />
					<Rounded />
					<MinMaxSize />
				</textbutton>
			)}
			{props.tagName === "imageButton" && (
				<imagebutton
					ref={elementRef as React.Ref<ImageButton>}
					{...elementProps}
					{...(props.elementPropsOverride as ReactInstancePropsWithRef<ImageButton>)}
				>
					<Overflow>
						<Padding />
						<Flex />
						{props.children}
					</Overflow>
					<Scale />
					<Border />
					<Aspect />
					<Rounded />
					<MinMaxSize />
				</imagebutton>
			)}
			{props.tagName === "text" && (
				<textlabel
					ref={elementRef as React.Ref<TextLabel>}
					{...elementProps}
					{...(props.elementPropsOverride as ReactInstancePropsWithRef<TextLabel>)}
				>
					<Overflow>
						<Padding />
						<Flex />
						{props.children}
					</Overflow>
					<Scale />
					<Border />
					<Aspect />
					<Rounded />
					<MinMaxSize />
				</textlabel>
			)}
			{props.tagName === "input" && (
				<textbox
					ref={elementRef as React.Ref<TextBox>}
					{...elementProps}
					{...(props.elementPropsOverride as ReactInstancePropsWithRef<TextBox>)}
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
