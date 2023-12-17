# keycloak

## データベースを作る
### 名前付きボリュームを作成する
```
docker volume create keycloak-mysql-data
```

### ネットワークを作る
```
docker network create keycloak-network
```

## v14のkeycloakを起動する
### ローカルでdocker imageを作成する

参考：
[Problem running Keycloak on Docker container](https://github.com/docker/for-mac/issues/5310#issuecomment-1150507539)

手順1
Clone Keycloak containers repository
```
git clone git@github.com:keycloak/keycloak-containers.git
```

手順2
Open server directory
```
cd keycloak-containers/server
```

手順3
Checkout at desired version
```
git checkout 14.0.0
```

手順4
Build docker image
```
docker build -t jboss/keycloak:14.0.0 .
```

### コンテナを起動する
```
docker compose up
```

## v21以降のKeycloakを起動する
```
docker compose up
```
