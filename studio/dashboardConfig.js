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
                  buildHookId: '5ec50f9c8489025e6df45ed4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-4eyk291d',
                  apiId: '7c8692d8-42f9-41e5-b023-e9dee081ca60'
                },
                {
                  buildHookId: '5ec50f9c51bc06ec18614575',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ogu8dt16',
                  apiId: '1058e575-d0ea-48dc-a895-15b369176f83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/innovatorsnest/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ogu8dt16.netlify.app', category: 'apps'}
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
