import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NavigationButton = () => {
  const navigate = useNavigate();
  //TODO arreglar bug con responsive
  return (
    <IconButton
      size="lg"
      aria-label="Add routine"
      icon={<ArrowBackIcon />}
      colorScheme="red"
      style={{
        position: "fixed",
        left: 35,
        top: 80,
        borderRadius: "50%",
        zIndex: 9999,
      }}
      onClick={() => navigate(-1)}
    />
  );
};

export default NavigationButton;
