import React from 'react';
import PropTypes from 'prop-types';
import './notification.css';

const propTypes = {
  visible: PropTypes.bool,
  type: PropTypes.oneOf(['success', 'error']),
  text: PropTypes.string
};

const defaultProps = {
  visible: false,
  text: '',
  type: 'success'
};

const styles = {
  container: {
    width: '100%',
    top: 56,
    position: 'fixed',
    textAlign: 'center',
    color: '#fff',
    zIndex: 99,
    height: 25
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
};

function Notification({ text, type, visible }) {
  return (
    <div style={styles.container} className="notification">
      <div
        className={`notification notification-slide-${visible ? 'in' : 'out'}`}
        style={{ height: '100%' }}
      >
        {
          visible &&
            <div
              style={{
                height: '100%',
                position: 'relative',
                backgroundColor: type === 'success' ? '#2ddad3' : '#f46d6d'
              }}
            >
              <p
                style={styles.text}
              >{text}
              </p>
            </div>
        }
      </div>
    </div>
  );
}

Notification.propTypes = propTypes;
Notification.defaultProps = defaultProps;

export default Notification;
