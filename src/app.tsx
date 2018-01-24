import { h, app, View } from 'hyperapp';
import Export from './components/export';

const view: View<{}, {}> = () => (
  <main>
    <h1>World</h1>
    <Export />
  </main>
)

const mainApp = app({}, {}, view, document.body);
