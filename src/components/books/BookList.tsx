import React from "react";
import { Row,Col } from "react-bootstrap";
import {IAuthor, IBook} from "../../types/dataTypes";
import Book from './Book'

type BookListProps = {
    books: IBook[];
    onUpdateClick: (updateIndex: number) => void
    onDeleteClick: (deleteIndex: number) => void
}

const BookList : React.FC<BookListProps> = (props) => {
    const renderBooks = () => {
        if(props.books.length === 0) {
            return (
                <li >
                   <label className='fst-italic'>No books listed here.</label>
                </li>
            );
        } else {
            return (
                <li className="booklist_item">
                    {
                        props.books.map( (book:IBook, index:number) =>
                         <Book book={book} index={index} key = {index} onDeleteClick={props.onDeleteClick} onUpdateClick={props.onUpdateClick}/>
                        )
                    }
                </li>
            )
        }
    
    }

    return (
        <Row className = "booklist my-3">
        <Col>
            <ul className="booklist_item list-unstyled mb-0 mx-0">
                {renderBooks()}
            </ul>
        </Col>
    </Row>
    )
}

export default BookList;