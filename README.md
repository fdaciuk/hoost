# [WIP] hoost

> Easily manage your virtual hosts

[![NPM version][npm-version-image]][npm-version-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Coverage Status][coverage-image]][coverage-url]
[![Code Climate Coverage][codeclimate-coverage-image]][codeclimate-coverage-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

[![NPM][nodei-image]][nodei-url]

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
[coverage-image]: https://coveralls.io/repos/fdaciuk/hoost/badge.svg?branch=dev
[coverage-url]: https://coveralls.io/r/fdaciuk/hoost?branch=dev
[codeclimate-coverage-url]: https://codeclimate.com/github/fdaciuk/hoost
[codeclimate-coverage-image]: https://codeclimate.com/github/fdaciuk/hoost/badges/coverage.svg
[codeclimate-image]: https://codeclimate.com/github/fdaciuk/hoost/badges/gpa.svg
[codeclimate-url]: https://codeclimate.com/github/fdaciuk/hoost
[nodei-image]: https://nodei.co/npm/hoost.png?downloads=true&downloadRank=true&stars=true
[nodei-url]: https://nodei.co/npm/hoost/