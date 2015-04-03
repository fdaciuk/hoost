# [WIP] hoost

> Easily manage your virtual hosts

[![NPM version][npm-version-image]][npm-version-url]
[![Build Status][travis-image]][travis-url]

## How to install

```sh
npm i -g hoost
```

## How to use

### `add <ip> <host>`

Add a host in `/etc/hosts`.

```sh
[sudo] hoost add 127.0.0.1 yourhost.com
```

### `list`

List all hosts in `/etc/hosts`.

```sh
hoost list
```

### `rm <ip> <host>`

Remove a host in `/etc/hosts`.

```sh
[sudo] hoost rm 127.0.0.1 yourhost.com
```

## License

[MIT](https://github.com/fdaciuk/hoost/blob/master/LICENSE)

[npm-version-image]: https://badge.fury.io/js/hoost.svg?style=flat
[npm-version-url]: http://badge.fury.io/js/hoost
[travis-image]: https://travis-ci.org/fdaciuk/hoost.svg
[travis-url]: https://travis-ci.org/fdaciuk/hoost