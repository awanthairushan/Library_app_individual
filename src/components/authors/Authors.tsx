import React, { useState } from 'react';
import {Row,Col} from 'react-bootstrap';
import AuthorList from './AuthorList';
import AuthorForm from './AuthorForm';
import {Plus} from 'react-feather';
import Swal from 'sweetalert2';
import {IAuthor} from '../../types/dataTypes';
import Author from "./Author";
import author from "./Author";

type AuthorsProps = {
    authors: IAuthor[];
    handleOnUpdateAuthor: (updateIndex:number) => void
    handleOnDeleteAuthor: (deleteIndex:number) => void
    setUpdateAuthorIndex: (updateAuthorIndex: number | null) => void
    handleOnSubmitAuthor: (author: IAuthor) => void
    updateAuthorIndex : number | null
    updateAuthor : IAuthor | null
    handleOnUpdateAuthorClick : (updatedAuthor : IAuthor) => void
    handleOnAddAuthorClick: () => void
    handleOnCloseAuthorClick: () => void
    isFormVisible: boolean
}


const Authors: React.FC<AuthorsProps> = (props) => {



    return (
        <React.Fragment>
            <Row className="authors">
                <Col className="px-0">
                    <h1 className="pb-1">Authors</h1>
                </Col>
            </Row>
            <Row>
                <Col className="ps-0"> 
                    <AuthorList authors={props.authors} handleOnUpdateAuthor={props.handleOnUpdateAuthor} handleOnDeleteAuthor={props.handleOnDeleteAuthor} />
                </Col>
            </Row>
            <Row className="px-0">
                <Col className="authors px-0">
                    <Plus className="plus_icon align-top me-1" onClick={props.handleOnAddAuthorClick}/>
                    <label onClick={props.handleOnAddAuthorClick}>Add Author</label>
                </Col>
            </Row>
            <Row className="px-0 pt-5">
                <Col>
                    {props.isFormVisible && <AuthorForm onCloseClick={props.handleOnCloseAuthorClick} onCreateClick={props.handleOnSubmitAuthor} updateAuthorIndex={props.updateAuthorIndex} updateAuthor={props.updateAuthor} onUpdateClick={props.handleOnUpdateAuthorClick}/>}
                </Col>
            </Row>
        </React.Fragment>
    );
}
export default Authors;