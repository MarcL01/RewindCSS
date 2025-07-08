import React, { useContext } from "@rbxts/react";
import { ElementContext } from "../ElementContext";
import getClassValue from "../utils/getClassValue";

export default function Aspect() {
	const { classList } = useContext(ElementContext);

	if (!getClassValue(classList, "aspect", "aspect")) return <React.Fragment />;

	const props = {
		AspectRatio: getClassValue(classList, "aspect", "aspect") as number,
	};

	return <uiaspectratioconstraint {...props} />;
}
