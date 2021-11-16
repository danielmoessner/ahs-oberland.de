import meta from '../symbols/meta';
import collection from '../symbols/collection';
import slug from '../symbols/slug';
import header from '../symbols/header';

export default {
  file: 'content/page/jobs.yml',
  label: 'Jobs',
  name: 'jobs',
  fields: [
    collection('page'),
    slug('jobs'),
    meta,
    header,
    {
      widget: 'object',
      name: 'jobs',
      label: 'Jobs',
      fields: [{ label: 'Titel', name: 'title', widget: 'string' }],
    },
  ],
};
