import React, { useContext } from "@rbxts/react";
import { ElementContext } from "../ElementContext";
import getClassValue from "../utils/getClassValue";

export default function Scale() {
	const { classList } = useContext(ElementContext);

	const scaleVal = getClassValue(classList, "scale", "scale") as number;

	if (!scaleVal) return <React.Fragment />;

	const props = {
		Scale: scaleVal,
	};

	return <uiscale {...props} />;
}
