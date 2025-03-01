import { IImage } from "../interfaces/imageInterface";

export const GifItem = ({ title, url }: IImage) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title || "No title available"}</p>
    </div>
  );
};
