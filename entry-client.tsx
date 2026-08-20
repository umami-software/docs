import { ShisoApp } from '@umami/shiso/client';
import { hydrateRoot } from 'react-dom/client';
import './styles.css';

const trackerId = import.meta.env.VITE_TRACKER_ID;

if (trackerId) {
  const script = document.createElement('script');
  script.defer = true;
  script.dataset.websiteId = trackerId;
  script.src = 'https://umami.is/u.js';
  document.head.append(script);
}

const element = document.getElementById('root');

if (!element) {
  throw new Error('Shiso could not find the root element.');
}

hydrateRoot(element, <ShisoApp />);
