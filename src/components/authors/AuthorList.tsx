import React,{} from 'react';
import {Row,Col} from 'react-bootstrap';
import Author from './Author';
import {IAuthor} from '../../types/dataTypes';

    type AuthorListProps = {
        authors: IAuthor[];
        handleOnUpdateAuthor: (updateIndex:number) => void
        handleOnDeleteAuthor: (deleteIndex:number) => void
    }

const AuthorList: React.FC<AuthorListProps> = (props) => {



    const renderAuthors = () => {
        if(props.authors.length === 0) {
            return (
                <li >
                   <label className='fst-italic'>No authors listed here.</label>
                </li>
            );
        } else {
            return (
                <li className="author_list_item">
                    {
                        props.authors.map( (author:IAuthor, index:number) =>
                         <Author author={author} index={index} key = {index} onUpdateAuthor={props.handleOnUpdateAuthor} onDeleteClick={props.handleOnDeleteAuthor}/>
                        )
                    }
                </li>
            )
        }

    }


    return (
        <Row className = "my-3">
            <Col>
                <ul className="list-unstyled mb-0">
                    {renderAuthors()}
                </ul>
            </Col>
        </Row>
    );
}

export default AuthorList;