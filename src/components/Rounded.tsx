import React, { useContext } from "@rbxts/react";
import { ElementContext } from "../ElementContext";
import getClassValue from "../utils/getClassValue";

export default function Rounded() {
	const { classList } = useContext(ElementContext);

	const roundedVal = getClassValue(classList, "rounded") as UDim;

	if (!roundedVal) return <React.Fragment />;

	const roundedProps = {
		CornerRadius: roundedVal,
	};
	return <uicorner {...roundedProps} />;
}
