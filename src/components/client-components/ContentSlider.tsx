'use client';

interface SliderItem {
	id: string | number;
	title: string;
	image: string; // full URL (already resolved)
}

interface Props {
	category: string;
	content: SliderItem[];
}

export const ContentSlider = ({ category, content }: Props) => {
	const formattedCategoryName =
		category.replaceAll('-', ' ')[0].toUpperCase() +
		category.replaceAll('-', ' ').slice(1);

	return (
		<div className="bg-black text-white relative px-5 md:px-20">
			<h2 className="text-2xl font-bold mb-4">
				{formattedCategoryName}
			</h2>
			<div className="flex space-x-4">
				{content.map((item) => {
					return (
                    <div>
                        
                    </div>
                    );
				})}
			</div>
		</div>
	);
};
