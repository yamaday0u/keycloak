import KcAdminClient from "@keycloak/keycloak-admin-client";
import { credentials } from "./src/credentials.js";
import { config } from "./src/connectionConfig.js";

const kcAdminClient = new KcAdminClient(config);
await kcAdminClient.auth(credentials);

const realm = await kcAdminClient.realms.create({
  realm: "testRealm01",
  enabled: true
});
console.log(realm);

// kcAdminClient.setConfig({
//   realmName: realm.realmName
// });

const user = await kcAdminClient.users.create({
  username: "testUser",
  enabled: true,
  attributes: {
    gender: "man"
  },
});
console.log(user);
