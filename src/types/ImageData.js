import PropTypes from 'prop-types';
import GatsbyImageData from './GatsbyImageData';

const ImageData = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    gatsbyImageData: GatsbyImageData,
  }),
});

export default ImageData;
