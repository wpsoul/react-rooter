import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import App from './App';
import './editor.scss';

export default function Edit(props) {
	const { attributes, setAttributes, clientId } = props;
	const { blockId } = attributes;

	useEffect(() => {
		if (!blockId) {
			const newBlockId = `react-rooter-${clientId.slice(0, 8)}`;
			setAttributes({ blockId: newBlockId });
		}
	}, []);

	const blockProps = useBlockProps();
	blockProps.id = blockId || 'react-rooter-init';

	return (
		<div {...blockProps}>
			<App />
		</div>
	);
}
