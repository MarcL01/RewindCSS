import React, { useContext } from "@rbxts/react";
import { ElementContext } from "../ElementContext";
import getClassValue from "../utils/getClassValue";

export default function Padding() {
	const { classList } = useContext(ElementContext);

	const pVal = getClassValue(classList, "p") as UDim;
	const pbVal = getClassValue(classList, "pb") as UDim;
	const ptVal = getClassValue(classList, "pt") as UDim;
	const prVal = getClassValue(classList, "pr") as UDim;
	const plVal = getClassValue(classList, "pl") as UDim;
	const pxVal = getClassValue(classList, "px") as UDim;
	const pyVal = getClassValue(classList, "py") as UDim;

	if (!pVal && !pbVal && !ptVal && !prVal && !plVal && !pxVal && !pyVal) return <React.Fragment />;

	const paddingProps = {
		PaddingBottom: pbVal || pyVal || pVal || new UDim(0, 0),
		PaddingTop: ptVal || pyVal || pVal || new UDim(0, 0),
		PaddingRight: prVal || pxVal || pVal || new UDim(0, 0),
		PaddingLeft: plVal || pxVal || pVal || new UDim(0, 0),
	};

	return <uipadding {...paddingProps} />;
}
