import React, { Component } from 'react';

class FormAddNews extends Component {

    render() {
        const {news: {title, text, author, date}, handleInput, AddNews, onClose} = this.props;
        return (
            <div className="FormAdd">
                <form>
                    <input
                        name="title"
                        type="text"
                        value={title}
                        onChange={handleInput}
                        placeholder="Title"
                    />
                    <textarea
                        name="text"
                        value={text}
                        onChange={handleInput}
                        placeholder="Text"
                    />
                    <input
                        name="date"
                        type="datetime"
                        value={date}
                        onChange={handleInput}
                        placeholder="Date"
                    />
                    <input
                        name="author"
                        type="text"
                        value={author}
                        onChange={handleInput}
                        placeholder="Author"
                    />
                    <div className="buttons">
                        <button
                            type="submit"
                            onClick={AddNews}
                            className={'Добавить'}
                        >
                            Добавить
                        </button>
                    </div>
                    {/*{(isError) &&*/}
                    {/*<p className="validationForm">Поля не должны быть пустыми</p>*/}
                    {/*}*/}

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