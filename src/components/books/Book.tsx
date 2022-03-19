import React from "react";
import {Row,Col} from 'react-bootstrap';
import {Edit,Trash2} from 'react-feather';
import {IBook} from '../../types/dataTypes';

type BookProps = {
    book: IBook;
    index: number;
    onUpdateClick: (updateIndex: number) => void
    onDeleteClick: (deleteIndex: number) => void
}

const Book: React.FC<BookProps> = (props) => {
    return (
        <Row className="book py-2">
            <Col xs={9} className="px-0">
                <label>{props.index+1} . {props.book.name}</label>
            </Col>
            <Col xs={3} className="d-flex justify-content-end icon_area px-0">
                <Edit className="text-warning edit mt-1" onClick={() => props.onUpdateClick(props.index)}/>
                <Trash2 className="text-danger trash2 mt-1" onClick={() => props.onDeleteClick(props.index)}/>
            </Col>
        </Row>
    )
}

export default Book;