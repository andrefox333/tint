import chromeFavicon from '../images/cropped-TINT-icon-45x45.png';
import appleFavicon from '../images/cropped-TINT-icon-45x45.png';
import msFavicon from '../images/cropped-TINT-icon-45x45.png';
import favicon from '../images/cropped-TINT-icon-45x45.png';

const metaAssets = () => {
  return [
    { charset: 'utf-8' },
    { name: 'description', content: 'Tint Assignment - Andre Recinto' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'msapplication-tap-highlight', content: 'no' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    { name: 'apple-mobile-web-app-title', content: 'reactGo' },
    { name: 'msapplication-TileImage', content: msFavicon },
    { name: 'msapplication-TileColor', content: '#3372DF' },
  ];
};

const linkAssets = () => {
  const links = [
    { rel: 'icon', href: favicon },
    { rel: 'icon', sizes: '192x192', href: chromeFavicon },
    { rel: 'apple-touch-icon', sizes: '152x152', href: appleFavicon },
  ];

  return links;
};

export const title = 'Tint Assignment';
export const meta = metaAssets();
export const link = linkAssets();
