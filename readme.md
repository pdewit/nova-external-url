# Nova External URL Field

Adds the ability to show external URLs in the detail and index views of resources. It uses the resolving feature from Nova to generate links.

It will show up in the detail view like this:

<img src="https://github.com/pdewit/nova-external-url/blob/master/detail-view.png?raw=true">

And in the index view like this:

<img src="https://github.com/pdewit/nova-external-url/blob/master/index-view.png?raw=true">

## Installation and usage

You can require this package using composer:

```
composer require pdewit/nova-external-url
```

You can add the field with a resolver as follows:

```php
use Pdewit\ExternalUrl\ExternalUrl;

ExternalUrl::make('Google Link', function () {
    return 'https://www.google.com/search?q=' . $this->name;
}),
```

## Customising the displayed text

You can customise the displayed text using the `linkText` function like so:

```php
use Pdewit\ExternalUrl\ExternalUrl;

ExternalUrl::make('Google Link', function () {
    return 'https://www.google.com/search?q=' . $this->name;
})->linkText($this->name),
```

The label below the link normally shows the URL, but it can be overridden:

```php
use Pdewit\ExternalUrl\ExternalUrl;

ExternalUrl::make('Google Link', function () {
    return 'https://www.google.com/search?q=' . $this->name;
})->labelText('View search results on Google'),
```
