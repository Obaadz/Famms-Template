type Props = {
  widthInPx: string;
  dark?: boolean;
};

const Logo = ({ widthInPx, dark }: Props) => {
  return (
    <img
      width={widthInPx}
      src={dark ? "images/white_logo.webp" : "images/logo.webp"}
      alt="Logo"
    />
  );
};

export default Logo;
