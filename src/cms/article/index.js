import collection from '../symbols/collection';

export default {
  name: 'article',
  label: 'Artikel',
  label_singular: 'Artikel',
  extension: 'md',
  editor: {
    preview: false,
  },
  folder: 'content/article',
  slug: '{{fields.slug}}',
  create: true,
  fields: [
    collection('article'),
    { label: 'Titel', name: 'title', widget: 'string' },
    {
      label: 'Slug',
      name: 'slug',
      widget: 'string',
      hint: 'Erscheint in der URL: /aktuelles/<slug>/',
    },
    { label: 'Datum', name: 'date', widget: 'date' },
    {
      label: 'Startseite',
      name: 'frontpage',
      widget: 'boolean',
      hint: 'Erscheint auf der Startseite',
      required: false,
    },
    { label: 'Bild', name: 'image', widget: 'image' },
    { label: 'Beschreibung', name: 'description', widget: 'text' },
    { label: 'Inhalt', name: 'body', widget: 'markdown' },
  ],
};
