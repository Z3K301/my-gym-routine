import { IconButton } from "@chakra-ui/react";
interface FloatButtonProps {
  onClick: () => void;
  icon: JSX.Element;
  color?: string;
}
const FloatButton = ({ onClick, icon, color = "teal" }: FloatButtonProps) => {
  return (
    <IconButton
      size="lg"
      aria-label="Float btn"
      icon={icon}
      colorScheme={color}
      style={{
        position: "fixed",
        right: 35,
        bottom: 35,
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

export default FloatButton;
