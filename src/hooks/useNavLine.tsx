import { useLayoutEffect, useRef, useState } from 'react';

const useNavLine = () => {
	const [lineState, setLineState] = useState({ left: 0, width: 0 });
	const lineRef = useRef<HTMLDivElement>(null);
	const selectedRef = useRef<HTMLLIElement | null>(null);

	const setLineToSelected = () => {
		if (lineRef.current && selectedRef.current) {
			const { width } = selectedRef.current.getBoundingClientRect();
			const left = selectedRef.current.offsetLeft;
			setLineState({ left, width });
		}
	};

	const setLineToHovered = (event: React.MouseEvent<HTMLLIElement>) => {
		if (lineRef.current) {
			const target = event.target as HTMLLIElement;
			const { width } = target.getBoundingClientRect();
			const left = target.offsetLeft;
			setLineState({ left, width });
		}
	};

	useLayoutEffect(() => {
		setLineToSelected();
		window.addEventListener('resize', setLineToSelected);

		return () => {
			window.removeEventListener('resize', setLineToSelected);
		};
	}, []);

	return {
		lineState,
		lineRef,
		selectedRef,
		setLineToSelected,
		setLineToHovered,
	};
};

export default useNavLine;
