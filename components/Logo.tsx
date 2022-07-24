type Props = {
  widthInPx: string;
  dark?: boolean;
};

const Logo = ({ widthInPx, dark }: Props) => {
  return (
    <img
      width={widthInPx}
      src={dark ? "images/white_logo.png" : "images/logo.png"}
      alt="Logo"
    />
  );
};

export default Logo;
