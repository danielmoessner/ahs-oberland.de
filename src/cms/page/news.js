import meta from '../symbols/meta';
import collection from '../symbols/collection';
import slug from '../symbols/slug';
import header from '../symbols/header';

export default {
  file: 'content/page/news.yml',
  label: 'Aktuelles',
  name: 'news',
  fields: [collection('page'), slug('news'), meta, header],
};
