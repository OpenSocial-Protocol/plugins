interface IConfig {
  taskLandingHost: string;
}

const configs: {
  [key: string]: IConfig;
} = {
  dev: {
    taskLandingHost: "https://landing-git-dev-zeek.vercel.app",
    // taskLandingHost: 'http://localhost:3000',
  },
  beta: {
    taskLandingHost: "https://landing-git-beta-zeek.vercel.app",
  },
  pre: {
    taskLandingHost: "https://landing-git-pre-zeek.vercel.app",
  },
  prod: {
    taskLandingHost: "https://landing.deek.network",
  },
};

export const getHostConfig = (env: string): IConfig => {
  return configs[env] || configs["dev"];
};
