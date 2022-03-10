module.exports = ({ podcast }) => ({
  plugins: [
    {
      resolve: "gatsby-source-anchor",
      options: {
        rss: podcast,
      },
    },
  ],
})
