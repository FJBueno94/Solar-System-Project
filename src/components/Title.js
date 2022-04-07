import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline, classeTitleBox, classeTitle } = this.props;
    return (
      <div className={ classeTitleBox }>
        <h2 className={ classeTitle }>{ headline }</h2>
      </div>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
  classeTitleBox: PropTypes.string.isRequired,
  classeTitle: PropTypes.string.isRequired,
};

export default Title;
