import { connect } from 'react-redux';
import ViewBookComponent from './view-book.component';

import { bookSet } from '../../actions/book-actions';

const mapStateToProps = (state) => {
  return {
    book: state.book,
    isVisitor: state.user.isVisitor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedBook(book) {
      dispatch(bookSet(book));
    }
  }
}

const ViewBookContainer = connect(
  mapStateToProps,
  mapDispatchToProps
) (ViewBookComponent);

export default ViewBookContainer;