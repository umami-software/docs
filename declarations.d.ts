declare module '*.css';

interface ImportMetaEnv {
  readonly VITE_TRACKER_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
