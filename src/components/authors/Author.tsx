import React from 'react';
import {Row,Col} from 'react-bootstrap';
import {Edit,Trash2} from 'react-feather';
import {IAuthor} from '../../types/dataTypes';

type AuthorProps = {
    author: IAuthor
    index: number
    onUpdateAuthor: (updateIndex:number) => void
    onDeleteClick: (deleteIndex:number) => void
}

const Author: React.FC<AuthorProps> = (props) => {

    const {author,index} = props;

    return (
        <Row className="author py-2">
            <Col xs={9} className="px-0">
                <label>{index+1} . {author.name}</label>
            </Col>
            <Col xs={3} className="d-flex justify-content-end icon_area px-0">
                <Edit className="text-warning edit mt-1" onClick={() => props.onUpdateAuthor(index)}/>
                <Trash2 className="text-danger trash2 mt-1" onClick={() => props.onDeleteClick(index)}/>
            </Col>
        </Row>
    );
}

export default Author;