import React, { useContext } from "@rbxts/react";
import { ElementContext } from "../ElementContext";
import getClassValue from "../utils/getClassValue";

export default function Scale() {
	const { classList } = useContext(ElementContext);

	if (!getClassValue(classList, "scale", "scale")) return <React.Fragment />;

	const props = {
		Scale: (getClassValue(classList, "scale", "scale") as number) || 1,
	};

	return <uiscale {...props} />;
}
