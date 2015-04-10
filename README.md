# hoost

> Easily manage your virtual hosts

<p align="center">
  <img src="hoost-logo.png" alt="Hoost" />
</p>

[![Build Status][travis-image]][travis-url]
[![Coveralls Coverage Status][coverage-image]][coverage-url]
[![Code Climate Coverage][codeclimate-coverage-image]][codeclimate-coverage-url]
[![Code Climate][codeclimate-image]][codeclimate-url]

[![NPM version][npm-version-image]][npm-package-url]
[![NPM Downloads][npm-downloads-image]][npm-package-url]
[![Dependencies][dependencies-image]][npm-package-url]
[![License][license-image]][license-url]

[![NPM][nodei-image]][nodei-url]

## How to install

```sh
npm i -g hoost
```

## How to use

### add

> Add a host in `/etc/hosts`.

Params: `add <ip> <host>`

Example:

```sh
[sudo] hoost add 127.0.0.1 yourhost.com
```

### rm

> Remove a host in `/etc/hosts`.

Params: `rm <ip> <host>`

Example:

```sh
[sudo] hoost rm 127.0.0.1 yourhost.com
```

### edit

> Edit a entry in `/etc/hosts`.

Params: `edit <ip> <host> <newip> <newhost>`

Example:

```sh
[sudo] hoost edit 127.0.0.1 yourhost.com 127.0.0.1 yournewhost.com
```

### list

> List all hosts in `/etc/hosts`.

Example:

```sh
hoost list
```

## License

[MIT][license-url]

[hoost-logo]: hoost-logo.png
[npm-package-url]: https://www.npmjs.com/package/hoost
[npm-version-image]: https://img.shields.io/npm/v/hoost.svg?style=flat-square
[npm-downloads-image]: https://img.shields.io/npm/dm/hoost.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/fdaciuk/hoost.svg?style=flat-square
[travis-url]: https://travis-ci.org/fdaciuk/hoost
[coverage-image]: https://img.shields.io/coveralls/fdaciuk/hoost/master.svg?style=flat-square
[coverage-url]: https://coveralls.io/r/fdaciuk/hoost?branch=master
[codeclimate-coverage-image]: https://img.shields.io/codeclimate/coverage/github/fdaciuk/hoost.svg?style=flat-square
[codeclimate-coverage-url]: https://codeclimate.com/github/fdaciuk/hoost
[codeclimate-image]: https://img.shields.io/codeclimate/github/fdaciuk/hoost.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/fdaciuk/hoost
[nodei-image]: https://nodei.co/npm/hoost.png?downloads=true&downloadRank=true&stars=true
[nodei-url]: https://nodei.co/npm/hoost/
[dependencies-image]: https://img.shields.io/david/fdaciuk/hoost.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/hoost.svg?style=flat-square
[license-url]: https://github.com/fdaciuk/hoost/blob/master/LICENSE