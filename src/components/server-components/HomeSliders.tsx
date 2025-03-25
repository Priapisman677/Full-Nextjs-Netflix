import { MOVIE_CATEGORIES, SMALL_IMG_BASE_URL, TV_CATEGORIES } from '@/lib/constants';
import { ContentSlider } from '../client-components/ContentSlider';
import { getMoviesByCategory } from '@/lib/fetchContent';

export default async function HomeSlider({ contentType,}: {  contentType: ContentType;}) {
	const categories =
		contentType === 'movie' ? MOVIE_CATEGORIES : TV_CATEGORIES;

	const sliders = await Promise.all(categories.map(async (category: string) => {
			const { content } = await getMoviesByCategory(category, contentType);

			return {
				category,
				content: content.map((item) => {
					return {
						id: item.id,
						title:((item as any).original_name as string) || ((item as any).original_title as string),
						image: SMALL_IMG_BASE_URL + item.backdrop_path
					};
				}),
			};
		})
	);

	return (
		<div className="flex flex-col gap-10 bg-black py-10">
			{sliders.map(({category, content}) => (
				<ContentSlider key={category} category={category} content={content} />
			))}
		</div>
	);
}
