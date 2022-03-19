import React, {useState} from 'react';
import {Row,Col} from 'react-bootstrap';
import {Plus} from 'react-feather';
import BookList from './BookList';
import BookForm from "./BookForm";
import {IAuthor, IBook} from '../../types/dataTypes';
import Swal from "sweetalert2";

const booksArray: IBook[] = [
];

type BooksProps = {
    authors: IAuthor[]
}
const Books : React.FC<BooksProps> = (props) => {
    const [books,setBooks] = useState<IBook[]>(booksArray);
    const [isFormVisible,setIsFormVisible] = useState(false);
    const [updateBookIndex,setUpdateBookIndex] = useState<number | null>(null);
    const [updateBook,setUpdateBook] = useState<IBook | null>(null);

    const handleOnCloseBookClick = () => {
        setIsFormVisible(false)
    }

    const handleOnAddBookClick = () => {
        setIsFormVisible(true);
        setUpdateBookIndex(null);
    }

    const handleOnSubmitBookClick = (book: IBook) => {
        const allBooks: IBook[] = books.slice();
        allBooks.push(book);
        setBooks(allBooks);



        Swal.fire({
            position: 'top-start',
            icon: 'success',
            title: 'Book added successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const handleOnUpdateClick = (updateIndex: number) => {
        handleOnAddBookClick();
        setUpdateBookIndex(updateIndex);
        setUpdateBook(books[updateIndex]);
    }

    const handleOnUpdateBookClick = (updatedBook: IBook) => {


        if (updateBookIndex !== null) {
            const allBooks: IBook[] = books.slice();
            allBooks.splice(updateBookIndex,1,updatedBook);
            setBooks(allBooks);
        }

        Swal.fire({
            position: 'top-start',
            icon: 'success',
            title: 'Book updated successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const handleOnDeleteClick = (deleteIndex: number) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const allBooks: IBook[] = books.slice();
                allBooks.splice(deleteIndex, 1);
                setBooks(allBooks);
                Swal.fire({
                    position: 'top-start',
                    icon: 'success',
                    title: 'Book deleted successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <React.Fragment>
            <Row>
                <Col className='books px-0'>
                    <h1 className="pb-1">Books</h1>
                </Col>
            </Row>
            <Row>
                <Col className="ps-0"> 
                    <BookList books = {books} onDeleteClick={handleOnDeleteClick} onUpdateClick={handleOnUpdateClick}/>
                </Col>
            </Row>
            <Row className="px-0">
                <Col className="books px-0">
                    <Plus className="plus_icon align-top me-1" onClick={handleOnAddBookClick}/>
                    <label onClick={handleOnAddBookClick}>Add Book</label>
                </Col>
            </Row>
            <Row className="px-0 pt-5">
                <Col>

                    {isFormVisible && <BookForm onCloseClick={handleOnCloseBookClick} books={books}  authors = {props.authors} onCreateClick={handleOnSubmitBookClick} onUpdateClick={handleOnUpdateBookClick} updateBookIndex={updateBookIndex} updateBook={updateBook}/>}
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default Books;