import React from "react";
import { useLocation } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

function Books() {
  const location = useLocation();
  const matchingBooks = location?.state?.matchingBooks;
  return (
    <Container className="mt-5" style={{ minHeight: "100vh" }}>
      <>
        <h2 className="mb-4">Your Matching Books</h2>
        {matchingBooks.length > 0 ? (
          <Row xs={1} md={3} className="g-4">
            {matchingBooks.map((book, index) => (
              <Col key={index}>
                <Card>
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <img
                      src={book.bookcover}
                      alt={book.title}
                      style={{ width: "100%", height: "200px" }}
                    />
                    <Card.Subtitle className="mb-2 mt-3  text-muted">
                      {book.author}
                    </Card.Subtitle>
                    <Card.Text className="mb-2">
                      <strong>Mood:</strong> {book.mood}
                    </Card.Text>
                    <Card.Text className="mb-2">
                      <strong>Genre:</strong> {book.genre}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>No matching books found.</p>
          </div>
        )}
      </>
    </Container>
  );
}

export default Books;
