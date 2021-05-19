import home from './home';
import styleguide from './styleguide';
import contact from './contact';
import news from './news';

export default {
  name: 'pages',
  label: 'Seiten',
  label_singular: 'Seite',
  delete: false,
  editor: {
    preview: false,
  },
  files: [home, news, contact, styleguide],
};
