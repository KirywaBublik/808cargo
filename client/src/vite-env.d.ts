/// <reference types="vite/client" />
/// <reference path="node_modules/@2gis/mapgl/global.d.ts" />
interface ImportMetaEnv {
  readonly APP_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
