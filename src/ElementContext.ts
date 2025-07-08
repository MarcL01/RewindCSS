import { createContext } from "@rbxts/react";
import { ClassList } from "./types";

export const ElementContext = createContext<{
	classList: ClassList | [];
}>({ classList: [] });
