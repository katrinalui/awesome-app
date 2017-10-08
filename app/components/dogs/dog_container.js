import { connect } from 'react-redux';
import Dog from './dog';
import { requestDog } from '../../actions/dog_actions';

const mapStateToProps = state => ({
  dog_url: state.url
});

const mapDispatchToProps = dispatch => ({
  requestDog: breed => dispatch(requestDog(breed))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dog);
