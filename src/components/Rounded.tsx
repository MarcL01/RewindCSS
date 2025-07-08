import React, { useContext } from "@rbxts/react";
import { ElementContext } from "../ElementContext";
import getClassValue from "../utils/getClassValue";

export default function Rounded() {
	const { classList } = useContext(ElementContext);

	const roundedProps = {
		CornerRadius: (getClassValue(classList, "rounded") as UDim) || new UDim(0, 0),
	};
	return <uicorner {...roundedProps} />;
}
