import { useEffect, useRef, useState } from 'react';

const useNavLine = () => {
	const [lineState, setLineState] = useState({ left: 0, width: 0 });
	const [isMounted, setIsMounted] = useState(false);
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
			const target = event.currentTarget as HTMLLIElement;
			const { width } = target.getBoundingClientRect();
			const left = target.offsetLeft;
			setLineState({ left, width });
		}
	};

	useEffect(() => {
		if (!isMounted) setIsMounted(true);
	}, [isMounted]);

	useEffect(() => {
		if (isMounted) {
			setLineToSelected();
			window.addEventListener('resize', setLineToSelected);
		}

		return () => {
			window.removeEventListener('resize', setLineToSelected);
		};
	}, [isMounted]);

	return {
		lineState,
		lineRef,
		selectedRef,
		setLineToSelected,
		setLineToHovered,
	};
};

export default useNavLine;
