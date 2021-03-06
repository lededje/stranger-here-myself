import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { updateUrl } from '../../actions/urlActions';
import storeProvider from '../../utils/storeProvider';

export default Page => class withRedux extends Component {
  static async getInitialProps() {
    const initialState = {};

    const store = storeProvider(initialState, false);

    let props;

    if (typeof Page.getInitialProps === 'function') {
      props = await Page.getInitialProps({ ...context, store });
    }

    return { _initialState: store.getState(), ...props };
  }

  render() {
    // Pseudo private props we need to pass between get initial props and render
    // eslint-disable-next-line react/prop-types
    const { _initialState, ...props } = this.props;

    return (
      <Provider store={storeProvider(_initialState, false)}>
        <Page {...props} />
      </Provider>
    );
  }
};
