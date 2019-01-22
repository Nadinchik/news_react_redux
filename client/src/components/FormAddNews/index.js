import React, { Component } from 'react';

class FormAddNews extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            text:'',
            author:'',
            date:0
        }
    }

    handleSubmit = () => {
        const {title, text, author, date} = this.state;
        const {onSubmit} = this.props;
        const data={
            title,
            text,
            date,
            author
        };
        onSubmit(data);
        this.setState({
            title:'',
            text:'',
            author:'',
            date:0
        })
    };

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState( { [name]: value});
    };

    render() {
        const { onClose, isError} = this.props;
        const {title, text, author, date} = this.state;
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
                        name="date"
                        type="datetime"
                        value={date}
                        placeholder="Date"
                    />
                    <input
                        name="author"
                        type="text"
                        value={author}
                        onChange={this.handleInput}
                        placeholder="Author"
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