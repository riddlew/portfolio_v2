import { useEffect, useState } from 'react';

const useDelayedMount = () => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		/*
		This is a bit of a hack, but it seems like I need at least 100ms
		of delay before I can start animations. Any less, and it will animate
		right away.
		*/
		setTimeout(() => setMounted(true), 100);
	}, []);

	return mounted;
};

export default useDelayedMount;
