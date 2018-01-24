import { h, app, View } from 'hyperapp';
import Export from './components/export';
import config from './config';

interface State {
  name: string;
}

interface Actions {
}

const state: State = {
  name: config.name.text
}

const view: View<State, {}> = (state) => (
  <main>
    <h1>hello</h1>
    <Export
      name={state}
    />
  </main>
)

const mainApp = app(state, {}, view, document.body);
