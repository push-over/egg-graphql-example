import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  graphql: {
    enable: true,
    package: '@switchdog/egg-graphql',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

export default plugin;
