import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthenticationRequired from '../../components/hoc/AuthenticationRequired';

const mapStateToProps = (state) => {
  return {
    //isLoggedIn: isLoggedIn(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
    }, dispatch)
  };
};

const mergeProps = void 0;

const HOC = options => {
  return WrappedComponent => {
    let DecoratedComponent = AuthenticationRequired(options)(WrappedComponent);
    DecoratedComponent = connect(
      mapStateToProps,
      mapDispatchToProps,
      mergeProps
    )(DecoratedComponent);

    return DecoratedComponent;
  };
};

export default HOC;