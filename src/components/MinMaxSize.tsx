import React, { useContext } from "@rbxts/react";
import { ElementContext } from "../ElementContext";
import getClassValue from "../utils/getClassValue";

export default function MinMaxSize() {
	const { classList } = useContext(ElementContext);

	const maxW = getClassValue(classList, "max-w", "max-w") as number;
	const maxH = getClassValue(classList, "max-h", "max-h") as number;
	const minW = getClassValue(classList, "min-w", "min-w") as number;
	const minH = getClassValue(classList, "min-h", "min-h") as number;

	if ([minW, minH, maxW, maxH].every((v) => (v as unknown as boolean) === false)) return <React.Fragment />;

	const props = {
		MaxSize: new Vector2(maxW || math.huge, maxH || math.huge),
		MinSize: new Vector2(minW || 0, minH || 0),
	};

	return <uisizeconstraint {...props} />;
}
