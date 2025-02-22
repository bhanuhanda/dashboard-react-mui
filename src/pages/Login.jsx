import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GOOGLE_CLIENT_ID } from '../constants';

export default function Login() {
  const navigate = useNavigate();

  const handleCredentialResponse = (response) => {
    localStorage.setItem('google_jwt', response.credential);
    navigate('/');
  };

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div id="google-signin-button"></div>
    </div>
  );
}
