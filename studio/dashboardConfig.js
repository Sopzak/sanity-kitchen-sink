export default {
  widgets: [
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
                  buildHookId: '5f79bb67fd79575403280faf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9h7yuv9y',
                  apiId: '681b975e-a097-49cd-a336-0d4b3838ebc7'
                },
                {
                  buildHookId: '5f79bb67a7879a966acc2a8e',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4hwjuphh',
                  apiId: '568141e4-0514-4636-ab16-a1112ac9c1f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sopzak/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4hwjuphh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
