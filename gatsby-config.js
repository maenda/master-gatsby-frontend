import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in North Bay!`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // name of plugin you're installing
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '93tbjfrc',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
