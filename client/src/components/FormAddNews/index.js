import React, { Component } from 'react';

class FormAddNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, text} = this.state;
        const { onSubmit, onClose } = this.props;
        if((text.trim() || text.length >= 30) && (text.trim() || text.length >= 30)){
            const data = {
                title,
                text,
            };
            onSubmit(data);
            this.setState({
                title: '',
                text: '',
                isError: false
            });
        }else {
            this.setState({isError: true})
        }
        onClose();
    };

    handleInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { onClose, isError} = this.props;
        const { title, text} = this.state;
        return (
          <div className="FormAdd">
              <form>
                  <input
                    name="title"
                    type="text"
                    value={title}
                    onChange={this.handleInput}
                    placeholder="Title"
                  />
                  <textarea
                    name="text"
                    value={text}
                    onChange={this.handleInput}
                    placeholder="Text"
                  />
                  <div className="buttons">
                      <button
                        type="submit"
                        onClick={this.handleSubmit}
                        className={'Добавить'}
                      >
                          Добавить
                      </button>
                  </div>
                  {(isError) &&
                  <p className="validationForm">Поля не должны быть пустыми</p>
                  }
                  <button
                    type="button"
                    className="buttons closeBtn"
                    onClick={onClose}
                  >
                      X
                  </button>
              </form>
          </div>
        );
    }
}

export default FormAddNews;