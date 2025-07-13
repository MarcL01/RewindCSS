import Object from "@rbxts/object-utils";

export function pick<T extends Record<string, unknown>, K extends keyof T>(
	obj: T,
	keys: readonly K[],
): [{ [P in K]: T[P] }, Omit<T, K>] {
	const picked = {} as { [P in K]: T[P] };
	const rest = {} as Omit<T, K>;

	(Object.keys(obj) as (keyof T)[]).forEach((key) => {
		if (keys.includes(key as K)) {
			const typedKey = key as K;
			picked[typedKey] = obj[typedKey];
		} else {
			const typedKey = key as Exclude<keyof T, K>;
			rest[typedKey] = obj[typedKey];
		}
	});

	return [picked, rest];
}
