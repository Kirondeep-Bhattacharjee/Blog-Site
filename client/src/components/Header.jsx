import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CgWebsite } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { removeToken } from "../helpers";

// Styled components
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #E8DFCA;
  padding: 0 1.5rem;
`;

const LogoButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const AuthButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const AuthButton = styled.button`
  border: none;
  background-color: #3E3232;
  color: white;
  cursor: pointer;
  margin-left: 1rem;
  height: 55px;
  border-radius: 150px;
  padding: 20px;
  text-align: center;
`;

const LogoutButton = styled(AuthButton)`
  color: red;
`;

const Header = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [forceRender, setForceRender] = useState(false); // State to force a rerender

  useEffect(() => {
    if (forceRender) {
      setForceRender(false); // Reset the force render state after rerender
    }
  }, [forceRender]);

  const handleLogout = () => {
    removeToken();
    navigate("/", { replace: true }); // Navigate to home page
    window.location.reload(); // Trigger a rerender
  };

  return (
    <HeaderContainer>
      <LogoButton onClick={() => navigate("/")}>
        <CgWebsite size={64} />
      </LogoButton>
      <AuthButtonsContainer>
        {user ? (
          <>
            <AuthButton onClick={() => navigate("/profile")}>
              {user.username}
            </AuthButton>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </>
        ) : (
          <>
            <AuthButton onClick={() => navigate("/signin")}>Login</AuthButton>
            <AuthButton onClick={() => navigate("/signup")} type="primary">
              SignUp
            </AuthButton>
          </>
        )}
      </AuthButtonsContainer>
    </HeaderContainer>
  );
};

export default Header;
