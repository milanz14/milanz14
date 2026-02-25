interface OrbProps {
  size?: string;
  color?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  opacity?: number;
}

function Orb({
  size,
  color,
  top,
  left,
  right,
  bottom,
  opacity,
}: OrbProps): React.ReactNode {
  return (
    <div
      className="orb"
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
        top,
        left,
        right,
        bottom,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}

export default Orb;
