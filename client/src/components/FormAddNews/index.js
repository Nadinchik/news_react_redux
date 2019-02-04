import React, {Component} from 'react';

class FormAddNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      tags: [],
      array:[],
      isError: false,
    };
  }

  addTags = (e) => {
    e.preventDefault();
    console.log('tags -->', this.state.tags);
    const {tags, array} = this.state;
    this.setState({
     array: [array, ...tags],
    })
  };

  handleAddPost = (e) => {
    e.preventDefault();
    const {title, text, tags} = this.state;
    const {onSubmit, onClose} = this.props;
    if ((text.trim() || text.length >= 30) && (text.trim() || text.length >= 30)) {
      const data = {
        title,
        text,
        tags
      };
      onSubmit(data);
      this.setState({
        title: '',
        text: '',
        tags: [],
        isError: false,
      });
    } else {
      this.setState({isError: true});
    }
    onClose();
  };

  handleInput = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  render() {
    const {onClose} = this.props;
    const {title, text, tags, isError} = this.state;
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
          <input
            name="tags"
            type="text"
            value={tags}
            className='last_elem'
            onChange={this.handleInput}
            placeholder="#Tags"
          />
          <button
            type="submit"
            onClick={this.addTags}
            className='addButton'
          >
            +
          </button>
          <div className="buttons">
            <button
              type="submit"
              onClick={this.handleAddPost}
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
