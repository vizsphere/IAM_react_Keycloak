import { useKeycloak } from '@react-keycloak/web';

const Home = () => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return keycloak.authenticated ? (
    <div>Welcome back, {keycloak.tokenParsed.preferred_username}!</div>
  ) : (
    <button onClick={() => keycloak.login()}>Login</button>
  );
};

export default Home;
