import { LazyLoadImage } from "react-lazy-load-image-component";

type Props = {
  widthInPx: string;
  dark?: boolean;
};

const Logo = ({ widthInPx, dark }: Props) => {
  return (
    <LazyLoadImage
      width={widthInPx}
      src={dark ? "images/white_logo.webp" : "images/logo.webp"}
      alt="Logo"
    />
  );
};

export default Logo;
