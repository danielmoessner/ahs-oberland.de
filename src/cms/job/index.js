import collection from '../symbols/collection';

export default {
  name: 'job',
  label: 'Jobs',
  label_singular: 'Job',
  extension: 'md',
  editor: {
    preview: false,
  },
  folder: 'content/job',
  slug: '{{fields.slug}}',
  create: true,
  fields: [
    collection('job'),
    { label: 'Titel', name: 'title', widget: 'string' },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
      hint: 'Erscheint in der URL: /jobs/<slug>/',
    },
    { label: 'Datum', name: 'date', widget: 'date' },
    {
      label: 'Beschreibung',
      name: 'description',
      widget: 'text',
      required: true,
    },
    {
      label: 'PDF',
      name: 'file',
      widget: 'file',
      required: true,
    },
  ],
};
