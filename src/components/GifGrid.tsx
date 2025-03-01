import { GifItem } from "./GifItem";
import { IImage } from "../interfaces/imageInterface";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }: { category: string }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <div>
      <h3>{category[0].toLocaleUpperCase() + category.slice(1)}</h3>

      <div className="card-grid">
        {loading ? (
          <p>Loading...</p>
        ) : (
          images.map((image: IImage) => <GifItem key={image.id} {...image} />)
        )}
      </div>
    </div>
  );
};
