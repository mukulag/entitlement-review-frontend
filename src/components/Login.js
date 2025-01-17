import React from 'react';
import { useMsal } from '@azure/msal-react';

const Login = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginRedirect({
      scopes: ["openid", "profile", "email"]
    });
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Login</h2>
      <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Login with Azure AD
      </button>
    </div>
  );
};

export default Login;
