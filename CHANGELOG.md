# Changelog

## 1.0.0 (2026-05-31)


### Features

* add Navbar, LoginPage, RegisterPage and ProtectedRoute ([ae459d8](https://github.com/Jhnvncntx/campuswap-client/commit/ae459d85ff1103e83c67cf831097605161f80223))
* changed the website title ([12f2098](https://github.com/Jhnvncntx/campuswap-client/commit/12f209887dc403aa3c961ec9906483016b821f69))
* initial React client setup with Vite, Tailwind, and auth context ([1632d6c](https://github.com/Jhnvncntx/campuswap-client/commit/1632d6ce8c4291184888af63052706169a82090b))


### Bug Fixes

* add API baseURL debug log ([0277933](https://github.com/Jhnvncntx/campuswap-client/commit/0277933203973912579bb95dc0a5b14d45bd75e9))
* add error boundary and safer listing fetch ([fa35988](https://github.com/Jhnvncntx/campuswap-client/commit/fa35988d11fb30534ec09cab6f5d9e592dc5a5c5))
* add placeholder routes and 404 catch-all to prevent white page on refresh ([a11af78](https://github.com/Jhnvncntx/campuswap-client/commit/a11af7847beb25313312c8fc606f380a97cce9cd))
* add Render redirects for client-side routing ([c80e1e3](https://github.com/Jhnvncntx/campuswap-client/commit/c80e1e3b63cbffdd503b7c63393693ab25a7e329))
* block app render until auth loading resolves ([c8c4455](https://github.com/Jhnvncntx/campuswap-client/commit/c8c445573d43aa060ab1924dac51f3ed3f5c8a47))
* exclude auth routes from 401 interceptor redirect ([4082423](https://github.com/Jhnvncntx/campuswap-client/commit/40824238382873739a6de51319bcc3a27db572ab))
* handle invalid JSON in localStorage for auth context ([fc6e1c7](https://github.com/Jhnvncntx/campuswap-client/commit/fc6e1c7404d159abd7f9045a0f25285727e34934))
* remove setTimeout from login and register navigation ([5543af0](https://github.com/Jhnvncntx/campuswap-client/commit/5543af0a55e2b1db66db8144fa74df835edfceb5))
* resolve auth loading race condition on protected routes ([036d4fe](https://github.com/Jhnvncntx/campuswap-client/commit/036d4fe2b3aa3ab241830dfe8393927638cdfb91))
