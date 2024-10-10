import React, { useState } from 'react';
import { useEffect } from 'react';

const PageBlock = ({ block }) => {
	const [content, setContent] = useState([]);
	useEffect(() => {
		const loadContent = async () => {
			const contents = await Promise.all(
				block.map(async (item) => {
					try {
						const htmlContent = await import(
							`../components/blocks/${item.project}/${item.type}.html`
						);
						return htmlContent.default;
					} catch (error) {
						console.error(
							`Error loading content for type ${item.type}: ${error.message}`,
						);
						return ''; 
					}
				}),
			);
			setContent(contents);
		};

		loadContent();
	}, [block]);

	return (
		<div className="page-block">
			{content.map((item, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: item }}></div>
      ))}
		</div>
	);
};

export default PageBlock;
