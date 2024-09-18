// Hack to get the access token from the URL for simple demonstration purpose, there will be no automatic refresh
export const accessToken = window.location.hash.split('#access_token=')[1]!.split('&')[0];//.split('#access_token=')[0].split('&')[0];
window.location.hash = '';
export * from './components/teaser-list-component.js';
export * from './components/tab-component.js';
export * from './components/chat-component.js';
export * from './components/voice-input-button.js';
export * from './components/document-previewer.js';
export * from './components/loading-indicator.js';
export * from './components/citation-list.js';
export * from './components/chat-thread-component.js';
export * from './components/chat-action-button.js';
export * from './core/index.js';
export * from './utils/index.js';

