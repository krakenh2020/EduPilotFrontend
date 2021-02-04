# KRAKEN Education Pilot - Uni Connector UI Preview

A frontend for [an API](https://api.tugraz.at/) that provides education verifiable credentials to university students.

Part of the **H2020 Project KRAKEN** and the **Verifiable Credentials for Student Mobility** project funded by TU Graz 
as a technologically enhanced administration (TEA) marketplace project.


online preview
--------------

* The content of this repo is deployed to: https://krakenh2020.github.io/EduPilotPrototype1/
* ![Build and Test](https://github.com/krakenh2020/EduPilotPrototype1/workflows/Build%20and%20Test/badge.svg?branch=master)
* ![Build and Deploy](https://github.com/krakenh2020/EduPilotPrototype1/workflows/Build%20and%20Deploy/badge.svg?branch=master)
* [![Quality Gate Status](https://sonari.atosresearch.eu/api/project_badges/measure?project=EduPilotPrototype1&metric=alert_status)](https://sonari.atosresearch.eu/dashboard?id=EduPilotPrototype1) 
* [![Security Rating](https://sonari.atosresearch.eu/api/project_badges/measure?project=EduPilotPrototype1&metric=security_rating)](https://sonari.atosresearch.eu/dashboard?id=EduPilotPrototype1)
* [![Vulnerabilities](https://sonari.atosresearch.eu/api/project_badges/measure?project=EduPilotPrototype1&metric=vulnerabilities)](https://sonari.atosresearch.eu/dashboard?id=EduPilotPrototype1)
* [![Technical Debt](https://sonari.atosresearch.eu/api/project_badges/measure?project=EduPilotPrototype1&metric=sqale_index)](https://sonari.atosresearch.eu/dashboard?id=EduPilotPrototype1)


local development
-----------------

```bash
# get the source
git clone https://github.com/krakenh2020/EduPilotPrototype1.git
cd EduPilotPrototype1
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
