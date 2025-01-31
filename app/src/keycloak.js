import Keycloak from 'keycloak-js'
const keycloakConfig = {
    realm: 'vizsphere',
    url: 'http://localhost:8080/admin/vizzon/console',
    clientId: 'react_keycloak'
};
const keycloak = new Keycloak(keycloakConfig);
export default keycloak
