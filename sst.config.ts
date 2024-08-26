/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'test-vercel',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      home: 'aws',
    };
  },
  async run() {
    new sst.aws.Nextjs('MyWeb', {
      openNextVersion: '3.0.8',
      buildCommand:
        '/home/lillemagga/Koding/git/open-next/packages/open-next/dist/index.js build',
    });
  },
});
