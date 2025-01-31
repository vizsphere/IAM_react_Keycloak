# IAM_react_Keycloak
IAM using react and Keycloak 


### Install Keycloak in docker 

```
docker run -p 8080:8080 -e KC_BOOTSTRAP_ADMIN_USERNAME=admin -e KC_BOOTSTRAP_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:26.0.5 start-dev
```


1) Key cloak admin console : http://localhost:8080/admin/ 
2) Following instruction to create new realms and user https://www.keycloak.org/getting-started/getting-started-docker
3) Key cloak account console : http://localhost:8080/realms/vizsphere/account (login to newly created user)
   

```
npx create-react-app app
``` 
```
npm install --save keycloak-js @react-keycloak/web react-router-dom
```

### links
1) https://www.keycloak.org/getting-started/getting-started-docker
2) https://github.com/react-keycloak/react-keycloak-examples/blob/master/examples/react-router/src/index.tsx
3) https://www.dhiwise.com/post/how-react-keycloak-provider-enhances-authentication
4) https://github.com/react-keycloak/react-keycloak/blob/master/packages/web/README.md
5) https://dev.to/vuyokazimkane/quick-guide-resolving-cannot-find-module-ajvdistcompilecodegen-in-react-4fbc
6) https://cagline.medium.com/authenticate-and-authorize-react-routes-component-with-keycloak-666e85662636
