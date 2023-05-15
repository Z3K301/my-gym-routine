import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const unloggedRoutes = ["/landing", "/login", "/signup", "/home"];
  return (
    <>
      {/* TODO cambiar a excluir home y rutas unlogged */}
      {!unloggedRoutes.includes(location.pathname) && (
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
      )}
    </>
  );
};

export default NavigationButton;
