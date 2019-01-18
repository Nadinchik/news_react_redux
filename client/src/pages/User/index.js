import React, {Component} from 'react';
import ModalWindow from "../../components/Modal";
import FormAddNews from "../../components/FormAddNews"

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isEdit: false,
            news:{
                title: '',
                text: '',
                date: 0,
                author: '',
            }
        }
    }

    // componentDidMount() {
    //     this.props.dispatch(userActions.getAll());
    // }

    handleAddNews = () => {
        this.props.addNews({title: this.state.title})
    };

    handleInput = (event) => {
        const {name, value} = event.target;
        this.setState(prevState => ({news: { ...prevState.news, [name]: value }}));
    };

    toggleModal = () => {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen,
            isEdit: false
        }));
    };

    render() {
        const {isOpen, news} = this.state;
        return (
          
            <div className="container">
                <button
                    className="addButton"
                    onClick={this.toggleModal}>
                    Добавить новость
                </button>

            <ModalWindow
                isOpen={isOpen}
                handleOpen={this.toggleModal}
            >
                <FormAddNews
                    news={news}
                    handleInput={this.handleInput}
                    addCity={this.handleAddNews}
                    onClose={this.toggleModal}
                    // isEdit={isEdit}
                />
            </ModalWindow>
            </div>
        )
    }
}

export default User;