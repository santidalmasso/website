import { RoughNotation } from "lib/rough-notation";

export const Highlight = ({
  color,
  children,
}: {
  color: string;
  children: string;
}) => {

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[0, 2]}
      iterations={1}
      animationDuration={Math.floor(33 * children.length)}
      color={color}
    >
      {children}
    </RoughNotation>
  )
};
