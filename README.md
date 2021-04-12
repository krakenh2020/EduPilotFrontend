# KRAKEN Education Pilot - Uni Connector UI Preview

[![Build, Test, Deploy](https://github.com/krakenh2020/EduPilotPrototype1/actions/workflows/test-and-deploy.yml/badge.svg)](https://github.com/krakenh2020/EduPilotPrototype1/actions/workflows/test-and-deploy.yml)

A frontend for [an API](https://api.tugraz.at/) that provides education verifiable credentials to university students.

- Deployment: https://github.com/krakenh2020/EduPilotDeploymentDocker
- API Backend: https://github.com/krakenh2020/EduPilotBackend
- API Bundle: https://github.com/PeterTheOne/vc4sm-bundle

Part of the [**H2020 Project KRAKEN**](https://krakenh2020.eu/) and the [**Verifiable Credentials for Student Mobility**](https://api.ltb.io/show/BLUOR) project funded by TU Graz 
as a technologically enhanced administration (TEA) marketplace project.

<!-- 
* [![Quality Gate Status](https://sonari.atosresearch.eu/api/project_badges/measure?project=EduPilotPrototype1&metric=alert_status)](https://sonari.atosresearch.eu/dashboard?id=EduPilotPrototype1) 
* [![Security Rating](https://sonari.atosresearch.eu/api/project_badges/measure?project=EduPilotPrototype1&metric=security_rating)](https://sonari.atosresearch.eu/dashboard?id=EduPilotPrototype1)
* [![Vulnerabilities](https://sonari.atosresearch.eu/api/project_badges/measure?project=EduPilotPrototype1&metric=vulnerabilities)](https://sonari.atosresearch.eu/dashboard?id=EduPilotPrototype1)
* [![Technical Debt](https://sonari.atosresearch.eu/api/project_badges/measure?project=EduPilotPrototype1&metric=sqale_index)](https://sonari.atosresearch.eu/dashboard?id=EduPilotPrototype1)
-->


## Local development

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


## License

LGPL-2.1-or-later License, Copyright (c) 2020-2021 Peter Grassberger & KRAKEN consortium

Peter Grassberger <p.grassberger@student.tugraz.at> is [the original](https://github.com/PeterTheOne/vc4sm-frontend) Author.


