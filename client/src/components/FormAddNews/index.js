import React, { Component } from 'react';

class FormAddNews extends Component {

    render() {
        const {handleInput, addNews, onClose} = this.props;
        return (
            <div className="FormAdd">
                <form>
                    <input
                        name="title"
                        type="text"
                        // value={text}
                        onChange={handleInput}
                        placeholder="Title"
                    />
                    <textarea
                        name="text"
                        // value={information}
                        onChange={handleInput}
                        placeholder="Text"
                    />
                    <input
                        name="date"
                        type="datetime"
                        // value={coordinates}
                        onChange={handleInput}
                        placeholder="Date"
                    />
                    <input
                        name="author"
                        type="text"
                        // value={coordinates}
                        onChange={handleInput}
                        placeholder="Author"
                    />
                    <div className="buttons">
                        <button
                            type="submit"
                            onClick={addNews}
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