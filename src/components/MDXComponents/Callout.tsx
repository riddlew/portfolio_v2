import {
	faCircleCheck,
	faCircleExclamation,
	faCircleInfo,
	faCircleQuestion,
	faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getType = (type: string | undefined) => {
	const icon = type || 'info';
	switch (icon) {
		case 'alert':
			return <FontAwesomeIcon icon={faCircleExclamation} size="lg" />;
		case 'warning':
			return <FontAwesomeIcon icon={faTriangleExclamation} size="lg" />;
		case 'question':
			return <FontAwesomeIcon icon={faCircleQuestion} size="lg" />;
		case 'success':
			return <FontAwesomeIcon icon={faCircleCheck} size="lg" />;
		default:
			return <FontAwesomeIcon icon={faCircleInfo} size="lg" />;
	}
};

export const Callout = ({
	type,
	title,
	children,
}: {
	type: string | undefined;
	title: string | undefined;
	children: JSX.Element;
}) => (
	<div className={`callout ${type || 'info'}`}>
		<div className="callout__icon">{getType(type)}</div>
		<div className="callout__content">
			{title && <div className="callout__title">{title}</div>}
			<div className="callout__body">{children}</div>
		</div>
	</div>
);
