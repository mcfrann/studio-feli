import Image from "next/image";

const ImageRender = ({ image, title }) => {
  const { src, height, width } = image;

  return (
    <Image
      alt={title ? title : "image"}
      src={src}
      width={height}
      height={width}
      priority
    />
  );
};

export default ImageRender;
