## exec

```
yarn dev
```

## DB

### create db

```
yarn sequelize db:create
# yarn sequelize db:drop
```

### create migration

```
yarn sequelize migration:generate -- --underscored --name posts
```

### migrate

```
yarn sequelize db:migrate
# yarn sequelize db:migrate:undo:all
```

### seed

```
yarn sequelize db:seed -- --seed seeders/20200323042325-posts.js
```
