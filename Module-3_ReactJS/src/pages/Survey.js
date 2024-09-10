import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

const Survey = () => {
    const questions = [
        {
            question: "Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            key: "q1"
        },
        {
            question: "Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            key: "q2"
        },
        {
            question: "Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            key: "q3"
        },
        {
            question: "Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            key: "q4"
        },
        {
            question: "Your question goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            key: "q5"
        }
    ];
    const [answers, setAnswers] = useState({});
    const [improvement, setImprovement] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleRadioChange = (e, key) => {
        setAnswers({ ...answers, [key]: e.target.value });
    };

    return (
        <Container className="mt-5" style={{ maxWidth: "600px" }}>
            <h1 className="text-center mb-4">CUSTOMER SURVEY</h1>
            <p className="text-center mb-4">
                Thank you for shopping with us! Please take a few minutes to rate us so we can serve you better.
            </p>
            <hr />
            <Form>
                {questions.map((item, index) => (
                    <React.Fragment key={item.key}>
                        <Row className="mb-3 align-items-center">
                            <Col xs={12} md={6}>
                                <p className="mb-2 mb-md-0">{item.question}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="d-flex justify-content-between">
                                    {["Very Bad", "Bad", "Neutral", "Good", "Excellent"].map((rating, i) => (
                                        <Form.Check
                                            key={i}
                                            type="radio"
                                            id={`${item.key}-${i}`}
                                            name={item.key}
                                            value={rating}
                                            onChange={(e) => handleRadioChange(e, item.key)}
                                            label={rating}
                                            className="text-center"
                                            style={{ minWidth: "60px", margin: "10px" }}
                                        />
                                    ))}
                                </div>
                            </Col>
                        </Row>
                        {index < questions.length - 1 && <hr />}
                    </React.Fragment>
                ))}
                <hr />
                <Form.Group className="mb-3">
                    <Form.Label>How else can we improve?</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={improvement}
                        onChange={(e) => setImprovement(e.target.value)}
                    />
                </Form.Group>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name:</Form.Label>
                            <Form.Control
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Survey;