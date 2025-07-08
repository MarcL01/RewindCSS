import React, { useContext } from "@rbxts/react";
import getClassValue from "../utils/getClassValue";
import { ElementContext } from "../ElementContext";

export default function Overflow(props: React.PropsWithChildren) {
	const { classList } = useContext(ElementContext);
	const hasOverflow = getClassValue(classList, "overflow") === "overflow";
	const hasOverflowX = getClassValue(classList, "overflow") === "overflow-x";
	const hasOverflowY = getClassValue(classList, "overflow") === "overflow-y";
	const ZIndex = getClassValue(classList, "z", "z") as number | undefined;

	const overflowProps = {
		ScrollBarThickness: 5,
		ScrollBarImageColor3: new Color3(255, 255, 255),
		Size: new UDim2(1, 0, 1, 0),
		BackgroundTransparency: 1,
		ScrollingDirection: hasOverflowY
			? Enum.ScrollingDirection.Y
			: hasOverflowX
				? Enum.ScrollingDirection.X
				: Enum.ScrollingDirection.XY,
		AutomaticCanvasSize: (hasOverflowY ? "Y" : hasOverflowX ? "X" : "XY") as "XY" | "X" | "Y",
		ZIndex: ZIndex,
	};

	return (
		<React.Fragment>
			{hasOverflow || hasOverflowX || hasOverflowY ? (
				<scrollingframe {...overflowProps}>{props.children}</scrollingframe>
			) : (
				<React.Fragment>{props.children}</React.Fragment>
			)}
		</React.Fragment>
	);
}
