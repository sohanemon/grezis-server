import app from './configs/app.js';
import config from './configs/config.js';

app.listen(config.port, () => {
  console.log('___________________________________________________________');
  console.log();
  console.log(`${config.name} ${config.version}`);
  console.log(`Listening on ${config.port} with NODE_ENV=${config.nodeEnv}`);
  console.log('___________________________________________________________');
});
