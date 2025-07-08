import React, { useContext } from "@rbxts/react";
import { ElementContext } from "../ElementContext";
import getClassValue from "../utils/getClassValue";

export default function BgImage() {
	const { classList } = useContext(ElementContext);

	const value = getClassValue(classList, "bg", "string") as string;
	if (!(value && typeOf(value) === "string" && value.match("^rbx").size() > 0)) return <React.Fragment />;

	const imageProps = {
		Size: new UDim2(1, 0, 1, 0),
		Image: (getClassValue(classList, "bg", "string") as string) || "",
		BackgroundTransparency: 1,
	};

	return <imagelabel {...imageProps} />;
}
