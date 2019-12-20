import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class GanglionListing extends Component {
  static propTypes = {
    Layout: PropTypes.func.isRequired,
    debugData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    match: PropTypes.shape({ params: PropTypes.shape({}) }),
    fetchDebugData: PropTypes.func.isRequired,
    fetchMeals: PropTypes.func.isRequired,
  }

  static defaultProps = {
    match: null,
  }

  state = {
    error: null,
    loading: false,
  }

  componentDidMount = () => this.fetchData();

  /*
  fetchData = (data) => {
    const { fetchRecipes, fetchMeals } = this.props;

    this.setState({ loading: true });

    return fetchRecipes(data)
      .then(() => fetchMeals())
      .then(() => this.setState({
        loading: false,
        error: null,
      })).catch(err => this.setState({
        loading: false,
        error: err,
      }));
  }
  */
  fetchData = (data) => {
    const { fetchDebugData } = this.props;

    this.setState({ loading: true });

    return fetchDebugData(data)
      //.then(() => fetchMeals())
      .then(() => this.setState({
        loading: false,
        error: null,
      })).catch(err => this.setState({
        loading: false,
        error: err,
      }));
  }

  render = () => {
    const { Layout, debugData, match } = this.props;
    const { loading, error } = this.state;
    const id = (match && match.params && match.params.id) ? match.params.id : null;

    return (
      <Layout
        error={error}
        loading={loading}
        debugData={debugData}
        reFetch={() => this.fetchData()}
      />
    );
  }
}

const mapStateToProps = state => ({
  debugData: state.debugData.debugData || {},
});

const mapDispatchToProps = dispatch => ({
  fetchDebugData: dispatch.recipes.getDebugData,
});

export default connect(mapStateToProps, mapDispatchToProps)(GanglionListing);
