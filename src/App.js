import React from 'react';
import { connect } from 'react-redux';
import AppForm from './components/AppForm';
import CustomSelect from './components/UI/CustomSelect';
import Spinner from './components/UI/Spinner';
import { FETCH_DATA, POST_DATA } from './actions/actions'
import './App.css';

const AcademiesList = React.lazy(() => import('./components/Academies'));

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 20,
      newAcademie: {
        title: '',
        type: 'general'
      },
      fieldValidError: false,
      loading: true,
      errored: false
    }
  };

  FETCH_DATA = () => {
    this.setState({
      loading: true,
      errored: false
    })
    this.props.FETCH_DATA(this.state.limit)
      .catch(err => {
        console.log(err)
        this.setState({
          errored: true
        })
      })
      .finally(() => {
        this.setState({
          loading: false
        })
      })
  };

  changeLimit = (evt) => {
    this.setState({
      limit: evt.target.value
    })
  };

  handleTitle = (evt) => {
    this.setState({
      newAcademie: {
        title: evt.target.value.trim(),
        type: 'general'
      }
    })
  };

  addAcademie = (evt) => {
    evt.preventDefault()

    if (this.state.newAcademie.title) {
      this.props.POST_DATA(this.state.newAcademie)
        .catch(err => {
          console.log(err)
        })
        .finally(() => {
          this.FETCH_DATA()
          this.setState({
            newAcademie: {
              title: '',
              type: 'general'
            },
            fieldValidError: false
          })
        })
    } else {
      this.setState({
        fieldValidError: true
      })
    }
  };

  componentDidMount() {
    this.FETCH_DATA()
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.limit !== prevState.limit) {
      this.FETCH_DATA()
    }
  };

  render() {
    return (
      <div className="container pt-3">
        <div className="row align-items-center justify-content-between mb-3">
          <AppForm title={this.state.newAcademie.title} fieldValidError={this.state.fieldValidError} addAcademie={this.addAcademie} handleTitle={this.handleTitle} />
          <CustomSelect changeLimit={this.changeLimit} />
        </div>
        {this.state.loading ? <Spinner /> : (!this.state.errored ? <React.Suspense fallback={<Spinner />}><AcademiesList academies={this.props.academies} /></React.Suspense> : (<p>Some error</p>))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  academies: state.academies.academies
});

export default connect(mapStateToProps, { FETCH_DATA, POST_DATA })(App);
