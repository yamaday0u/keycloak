import KcAdminClient from "@keycloak/keycloak-admin-client";
import { config } from "./connectionConfig.js";
import { credentials } from "./credentials.js";

const kcAdminClient = new KcAdminClient(config);
await kcAdminClient.auth(credentials);

const realm = await kcAdminClient.realms.create({
  realm: "demoRealm02",
  enabled: true
});
console.log(realm);

const user = await kcAdminClient.users.create({
  realm: realm.realmName,
  username: "demoUser",
  enabled: true,
  attributes: {
    gender: "man"
  }
});
console.log(user);
