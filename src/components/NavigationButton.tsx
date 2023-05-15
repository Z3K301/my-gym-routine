import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      {location.pathname !== "/home" && (
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
          }}
          onClick={() => navigate(-1)}
        />
      )}
    </>
  );
};

export default NavigationButton;
