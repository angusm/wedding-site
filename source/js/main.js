const getCurrentAnchorByCenter = require('toolbox/components/deep-link-by-scroll/get-current-anchor-by-center');
const DeepLinkByScroll = require('toolbox/components/deep-link-by-scroll/base');

new DeepLinkByScroll(getCurrentAnchorByCenter, false);
