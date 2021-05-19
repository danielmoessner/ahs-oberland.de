import meta from '../symbols/meta';
import collection from '../symbols/collection';
import slug from '../symbols/slug';
import header from '../symbols/header';

export default {
  file: 'content/page/contact.yml',
  label: 'Kontakt',
  name: 'contact',
  fields: [collection('page'), slug('contact'), meta, header],
};
