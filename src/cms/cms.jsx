/* eslint-disable react/prop-types */
import CMS, { init } from 'netlify-cms-app';
import { de } from 'netlify-cms-locales';
import React from 'react';
import Animal from '../components/Animal';
import AnimalCard from '../components/AnimalCard';
import Container from '../components/Container';
import page from './page/index';
import setting from './setting/index';
import article from './article';
import legal from './legal';
import job from './job';

// See https://www.netlifycms.org/docs/configuration-options/#locale
CMS.registerLocale('de', de);

// See https://www.netlifycms.org/docs/beta-features/#manual-initialization
init({
  config: {
    // See https://www.netlifycms.org/docs/configuration-options/#backend
    backend: {
      name: 'git-gateway',
      branch: 'main',
      repo: 'danielmoessner/ahs-oberland.de',
    },
    // See https://www.netlifycms.org/docs/beta-features/#working-with-a-local-git-repository
    local_backend: true,
    // See https://www.netlifycms.org/docs/configuration-options/#locale
    locale: 'de',
    // See https://www.netlifycms.org/docs/configuration-options/#display-url
    display_url: 'https://ahs-oberland.de',
    // See https://www.netlifycms.org/docs/configuration-options/#site-url
    site_url: 'https://ahs-oberland.de',
    // See https://www.netlifycms.org/docs/configuration-options/#media-folder
    media_folder: '/content/media',
    // See https://www.netlifycms.org/docs/configuration-options/#public-folder
    public_folder: '../media',
    // See https://www.netlifycms.org/docs/beta-features/#manual-initialization
    load_config_file: false,
    // See https://www.netlifycms.org/docs/collection-types/
    collections: [page, article, job, setting, legal],
  },
});

// Previews
function AnimalPreview({ entry, widgetFor }) {
  const animalData = {
    title: entry.getIn(['data', 'title']),
    category: entry.getIn(['data', 'category']),
    excerpt: entry.getIn(['data', 'excerpt']),
  };
  return (
    <Container>
      <div className="pt-5 pb-32">
        <Animal preview animal={animalData} image={widgetFor('image')} body={widgetFor('body')} />
        <hr className="my-10 bg-gray-600" />
        <div className="max-w-xs">
          <AnimalCard preview animal={animalData} image={widgetFor('image')} />
        </div>
      </div>
    </Container>
  );
}
CMS.registerPreviewTemplate('animal', AnimalPreview);
