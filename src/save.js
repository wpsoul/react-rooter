import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { blockId } = attributes;
    const blockProps = useBlockProps.save();
    blockProps.id = blockId || 'react-rooter-init';

    return (
        <div {...blockProps} />
    );
}