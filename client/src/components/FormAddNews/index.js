import React, {Component} from 'react';

class FormAddNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      tags: [],
      newTag: '',
      isError: false,
    };
  }

  addTags = (e) => {
    e.preventDefault();
    console.log('tags -->', this.state.tags);
    const {newTag} = this.state;
    let array = this.state.tags.slice();
    array.push(newTag);
    this.setState({
      tags: array,
      newTag:''
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
      console.log('onSubmit', onSubmit(data));
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
    console.log('event.target.value', event.target.value);
    const {name, value} = event.target;
    this.setState({[name]: value});
  };


  render() {
    const {onClose} = this.props;
    const {title, text, tags, newTag, isError} = this.state;

    console.log('tags', tags);

    const listTags = tags.length > 0 ? tags.map((item, index) => {
      return <li key={index}>{item}</li>
    }) : <span/>;

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

          <ul>{listTags}</ul>

          <input
            name="newTag"
            type="text"
            value={newTag}
            className='last_elem'
            onChange={this.handleInput}
            placeholder="#Tags"
          />
          <button
            type="submit"
            onClick={this.addTags}
            className='addTags'
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
