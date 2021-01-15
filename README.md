vc4sm-frontend
==============

a frontend for an API that provides education verifiable credentials to university students.

- Bundle: https://github.com/PeterTheOne/vc4sm-bundle
- Backend https://github.com/PeterTheOne/vc4sm-backend

Part of the **Verifiable Credentials for Student Mobility** project funded by TU Graz 
as a technologically enhanced administration (TEA) marketplace project.

local development
-----------------

```bash
# get the source
git clone git@github.com:PeterTheOne/vc4sm-frontend.git
cd vc4sm-frontend
git submodule update --init

# install dependencies
yarn install

# constantly build dist/bundle.js and run a local web-server on port 8001 
yarn run watch

# same as watch, but with babel, terser, etc active -> very slow
yarn run watch-full

# run tests
yarn test

# build for deployment
yarn build
```

Jump to <https://localhost:8001> and you should get a Single Sign On login page.

license
-------

LGPL-2.1-or-later License, Copyright (c) 2020 Peter Grassberger

Peter Grassberger <p.grassberger@student.tugraz.at> is the Author.

TU Graz has exclusive right of use and the right to grant usage rights and does so as `LGPL-2.1-or-later`,
also see agreement in german below.

> Der/Die Auftragnehmer/in überträgt der TU Graz an den von ihm/ihr erzielten
  Arbeitsergebnissen sämtliche wie immer gearteten unbeschränkten,
  ausschließlichen und übertragbaren Werknutzungsrechte, welche das Recht
  beinhalteten, die Arbeitsergebnisse auf alle dem Urheber/der Urheberin
  vorbehaltenen Arten zu benutzen oder benutzen zu lassen. Die TU Graz ist zur
  uneingeschränkten Ausübung der Rechte an den Arbeitsergebnissen berechtigt und
  hat das Recht, Dritten diese ausschließliche Nutzungsbefugnis zu übertragen oder
  diesen ein einfaches Nutzungsrecht einzuräumen. Die Übertragung oben genannter
  Rechte ist mit der Bezahlung des vereinbarten Entgelts abgegolten. Ein darüber
  hinaus gehendes Entgelt gebührt ausdrücklich nicht.
