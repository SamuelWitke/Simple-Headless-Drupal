# Simple Headless Drupal 8.5.4 and Create-React-App Application

## Backend
```
cd backend
composer install
(Optional)
drush si config_installer -y --account-name=admin --account-pass=admin
or navigate to your site and follow Drupal installation instructions.
```

## Frontend
```
npm i 
npm start
```

This project template provides a starter kit for managing your site
dependencies with [Composer](https://getcomposer.org/).

If you want to know how to use it as replacement for
[Drush Make](https://github.com/drush-ops/drush/blob/8.x/docs/make.md) visit
the [Documentation on drupal.org](https://www.drupal.org/node/2471553).

# Starting Over 

## Backend
First you need to [install composer](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-osx).

> Note: The instructions below refer to the [global composer installation](https://getcomposer.org/doc/00-intro.md#globally).
You might need to replace `composer` with `php composer.phar` (or similar) 
for your setup.

After that you can create the project:

```
composer create-project drupal-composer/drupal-project:8.x-dev some-dir --stability dev --no-interaction
```

With `composer require ...` you can download new dependencies to your 
installation.

## Using graphql
```
cd backend 
composer require drupal/graphql
(Optional)
composer update
```

## Frontend
```
create-react-app frontend
cd frontend
npm i
npm start
```
