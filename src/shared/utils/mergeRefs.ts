import { Ref } from 'react';

export const mergeRefs = <T>(...refs: (Ref<T> | null | undefined)[]) => {
	return (node: T | null) => {
		refs.forEach((ref) => {
			if (typeof ref === 'function') {
				ref(node);
			} else if (ref != null) {
				(ref as { current: T | null }).current = node;
			}
		});
	};
};
