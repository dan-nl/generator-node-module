# generator-node-module
[![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url] [![NSP Status][nsp-image]][nsp-url]

[yeoman generator][yeoman-getting-started-url] that creates a node module project by running the following tasks:

* [npm init][generator-npm-init-url]
* [create license.txt][generator-license-url]
* [create readme.md][generator-readme-url]
* [install tap and optionally sinon][generator-tap-url]
* [install coveralls][generator-coveralls-url]
* [install eslint-config][generator-eslint-config-url]
* [create .travis.yml][generator-travis-url]

## installation
```bash
npm install -g dan-nl/generator-node-module
```

## use
```bash
yo node-module
```

## license
[MIT License][mit-license]

[david-dm-image]: https://david-dm.org/dan-nl/generator-node-module.svg
[david-dm-url]: https://david-dm.org/dan-nl/generator-node-module
[david-dm-dev-image]: https://david-dm.org/dan-nl/generator-node-module/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/generator-node-module?type=dev
[generator-coveralls-url]: https://github.com/dan-nl/generator-coveralls
[generator-eslint-config-url]: https://github.com/dan-nl/generator-eslint-config
[generator-license-url]: https://github.com/dan-nl/generator-license
[generator-npm-init-url]: https://github.com/dan-nl/generator-npm-init
[generator-readme-url]: https://github.com/dan-nl/generator-readme
[generator-tap-url]: https://github.com/dan-nl/generator-tap
[generator-travis-url]: https://github.com/dan-nl/generator-travis
[mit-license]: https://raw.githubusercontent.com/dan-nl/generator-module/master/license.txt
[nsp-image]: https://nodesecurity.io/orgs/githubdan-nl/projects/aa5eea46-090e-45f4-8878-ded6ccf2c357/badge
[nsp-url]: https://nodesecurity.io/orgs/githubdan-nl/projects/aa5eea46-090e-45f4-8878-ded6ccf2c357
[yeoman-getting-started-url]: http://yeoman.io/authoring/index.html
