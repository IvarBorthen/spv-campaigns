export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e768a8afab062e6aadfbcd6',
                  title: 'Sanity Studio',
                  name: 'spv-campaigns-studio',
                  apiId: 'b76ea155-268a-49cd-ae1a-6e41f782f46c'
                },
                {
                  buildHookId: '5e768a8ae2649442d9e91485',
                  title: 'Landing pages Website',
                  name: 'spv-campaigns',
                  apiId: '4340e255-4971-40eb-9d62-608fe5343ccd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IvarBorthen/spv-campaigns',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://spv-campaigns.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
