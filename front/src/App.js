import React from 'react';
import './style/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      isPressed: false,
    };
  }

  handleClick = () => {
    this.setState((state) => (
      {
        message: !state.isPressed ? 'Guys, Where is front?!' : '',
        isPressed: !state.isPressed,
      })
    );
  }

  render() {
    const { isPressed, message } = this.state;
    if (!isPressed) {
      return (
        <>
          <div
            className='st'
            onClick={this.handleClick}
          >
            <div className='st-top'>
              <div className='st-bound st-bound-full'></div>
              <p>
                <span className='st-drop st-stranger-s'>А</span>
                <span className='st-stranger-t'>н</span>
                <span className='st-stranger-r'>т</span>
                <span className='st-stranger-a'>о</span>
                <span className='st-drop st-stranger-r-2'>н</span>
              </p>
              <div className='st-bound st-bound-mini st-bound-left'></div>
              <div className='st-bound st-bound-mini st-bound-right'></div>
            </div>
            <div className='st-bottom'>
              <p>
                <span className='st-things-t'>П</span>
                <span className='st-things-h'>е</span>
                <span className='st-things-i'>т</span>
                <span className='st-things-n'>у</span>
                <span className='st-things-s'>х</span>
              </p>
            </div>
          </div>
        </>
      );
    }

    return (
      <div
        className='st'
        onClick={this.handleClick}
      >
        <div className='st-top'>
          <div className='st-things-t'>
            {message}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
