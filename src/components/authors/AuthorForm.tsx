import React, {useState, useEffect, ChangeEvent} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';
import {XCircle} from 'react-feather';
import {IAuthor, UpdateAuthor} from '../../types/dataTypes';
import {addAuthor, updateAuthor, updateAuthorIndex} from "../../store/reducers/librarySlice";
import Swal from "sweetalert2";
import {useAppDispatch} from "../../store/hooks";

type AuthorFormProps = {
    onCloseClick: () => void
    updateAuthorIndex: number | null
    updateAuthor: IAuthor | null
}

const AuthorForm: React.FC<AuthorFormProps> = (props) => {
    const dispatch = useAppDispatch();

    const [authorName, setAuthorName] = useState<string>("");
    const [validated, setValidated] = useState(false);

    const handleOnChange = (name: string) => {
        setAuthorName(name);
    }

    useEffect(() => {
        if (!props.updateAuthor) {
            return;
        }
        setAuthorName(props.updateAuthor.name);
    }, [props.updateAuthor])


    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true)
        } else {
            event.preventDefault();
            const temporyAuthor: IAuthor = {name: authorName}
            if (props.updateAuthorIndex === null) {
                dispatch(addAuthor(temporyAuthor));
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Author added successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                // props.onUpdateClick(temporyAuthor);
                const updateAuthorTempory: UpdateAuthor = {
                    author: temporyAuthor,
                    updateAuthorIndex: props.updateAuthorIndex
                };
                dispatch(updateAuthor(updateAuthorTempory));
                dispatch(updateAuthorIndex(-1))
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Author updated successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            setAuthorName("");
        }
    }

    return (
        <Row>
            <Col lg={9} md={12} className="pe-4">
                <Row className="author_form">
                    <Col xs={11} className="px-0">
                        <h2 className="px-0 fs-3">{props.updateAuthorIndex === null ? "Create" : "Update"} Author</h2>
                    </Col>
                    <Col xs={1} className="p-0 d-flex justify-content-end align-items-center">
                        <XCircle className="x_circle me-2" onClick={props.onCloseClick}/>
                    </Col>
                </Row>
                <Row className="author_form pt-3 ">
                    <Col className="pe-0 ms-lg-4 me-md-2">
                        <Form noValidate validated={validated} className="" id="author_form" onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Label className="px-0 mb-0">Name of Author</Form.Label>
                                <Form.Control type="text" className="form_control px-0" size="sm"
                                              value={authorName}
                                              required onChange={(event: ChangeEvent<HTMLInputElement>) =>
                                    handleOnChange(event.target.value)}/>
                                <Form.Control.Feedback type="invalid">
                                    Author Name is required.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row className="author_form py-4 ">
                    <Col className="p-0 d-flex justify-content-end me-md-2">
                        <Button variant="primary" className="px-4 fs-6 create_button"
                                size="sm"
                                type="submit"
                                form="author_form">{props.updateAuthorIndex === null ? "Create" : "Update"}
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default AuthorForm;