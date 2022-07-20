type Props = {
  widthInPx: string;
};

const Logo = ({ widthInPx }: Props) => {
  return <img width={widthInPx} src="images/logo.png" alt="Logo" />;
};

export default Logo;
