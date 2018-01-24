import { h, View } from "hyperapp";

interface State {
  readonly name: string;
}

const view: View<State, {}> = (state) => (
  <h1>{state.name}</h1>
)

export default view;
