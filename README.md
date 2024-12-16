# viewers-leaderboard-frontend
A Twitch extension that shows a leaderboard of viewers.

## How to setup the project

### Install NodeJS (>= 20.17)
This project uses NodeJS 20.17, so make sure you have it installed. You can download the necessary version from [NodeJS official website](https://nodejs.org/en/download/package-manager/current) or install it using your preferred method.

### Install pnpm
The project dependencies are managed using [pnpm](https://pnpm.io/), a faster alternative to npm. To install it, open the terminal and execute the following command:

```shell
npm install -g pnpm
```

### Install dependencies
After installing pnpm, the next step is to install the project dependencies. To do so, just execute:

```shell
pnpm install
```

### Run locally or build the project

-   `pnpm run dev` - Starts a dev server at http://localhost:5173/

-   `pnpm run build` - Builds for production, emitting to `dist/`

-   `pnpm run preview` - Starts a server at http://localhost:4173/ to test production build locally

### Set environment variables

The project provides a `.env.example` file containing the available environment variables.

#### Backend host

This project make request to the required backend [viewers-leaderboard-backend](https://github.com/limeiralucas/viewers-leaderboard-backend). The address of the running backend application needs to be configured through a environment variable:

```shell
VITE_API_BASE_URL="http://backend-host:8000"
```

#### Update interval
The update interval for the ranking panel can be configured using the environment variable `VITE_RANKING_UPDATE_INTERVAL_MS` (in milliseconds). The default value is `60000` (1 minute).

```shell
VITE_RANKING_UPDATE_INTERVAL_MS=60000
```

#### Overriding values for testing purposes

If you're testing the application outside Twitch, you'll probably need to force some values to simulate the platform. You can do so using the following environment variables:

```shell
# Viewer id
VITE_FORCE_USER_ID="user-123"

# Channel/broadcaster id where the livestream is happening
VITE_FORCE_CHANNEL_ID="channel-id"
```