import React, {useState} from 'react';
import {Container,Col,Row} from 'react-bootstrap'
import Welcome from '../components/welcome/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authors from '../components/authors/Authors'
import Books from '../components/books/Books';
import {IAuthor} from "../types/dataTypes";
import Swal from "sweetalert2";

const authorsArray: IAuthor[] = [];

const LibraryPage: React.FC = () => {

    const [authors,setAuthors] = useState<IAuthor[]>(authorsArray);
    const [updateAuthorIndex,setUpdateAuthorIndex] = useState<number | null>(null);
    const [updateAuthor,setUpdateAuthor] = useState<IAuthor | null>(null);


    const handleOnDeleteAuthor = (deleteIndex:number) => {
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
                const allAuthors: IAuthor[] = authors.slice();
                allAuthors.splice(deleteIndex, 1);
                setAuthors(allAuthors);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Author deleted successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
           }
        })
    }

    const handleOnSubmitAuthor = (author: IAuthor) => {
        const allAuthors: IAuthor[] = authors.slice();
        allAuthors.push(author);
        setAuthors(allAuthors);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Author added successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const handleOnUpdateAuthor = (updateIndex: number) => {
        handleOnAddAuthorClick();
        setUpdateAuthorIndex(updateIndex);
        setUpdateAuthor(authors[updateIndex]);
    }

    const handleOnUpdateAuthorClick = (updatedAuthor: IAuthor) => {
        if (updateAuthorIndex !== null) {
            const allAuthors: IAuthor[] = authors.slice();
            allAuthors.splice(updateAuthorIndex,1,updatedAuthor);
            setAuthors(allAuthors);
        }


        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Author updated successfully',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const [isFormVisible,setIsFormVisible] = useState<boolean>(false);

    const handleOnAddAuthorClick = () => {
        setIsFormVisible(true);
        setUpdateAuthorIndex(null);
    }
    const handleOnCloseAuthorClick = () => {
        setIsFormVisible(false)
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                    <Welcome/>
                </Col>
            </Row>
            <Row>
                <Col xs={{span:12,order:2}} md={{span:6,order:1}} className="px-sm-5 px-4 mb-4">
                    <Books authors={authors}/>
                </Col>
                <Col xs={{span:12,order:1}} md={{span:6,order:2}} className="px-sm-5 px-4 mb-4">
                    <Authors
                        authors={authors}
                        handleOnUpdateAuthor={handleOnUpdateAuthor}
                        handleOnDeleteAuthor={handleOnDeleteAuthor}
                        handleOnSubmitAuthor={handleOnSubmitAuthor}
                        updateAuthorIndex={updateAuthorIndex}
                        updateAuthor={updateAuthor}
                        handleOnUpdateAuthorClick={handleOnUpdateAuthorClick}
                        setUpdateAuthorIndex={setUpdateAuthorIndex}
                        handleOnAddAuthorClick={handleOnAddAuthorClick}
                        handleOnCloseAuthorClick={handleOnCloseAuthorClick}
                        isFormVisible={isFormVisible}
                    />
                </Col>
            </Row>
        </Container>
    );
}
export default LibraryPage;