import React from "react";
import { Card, ListGroup } from "react-bootstrap";


export default function Tweet({author, text, date}) {
    const [counter, setCounter] = React.useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <Card>
                <Card style={{ width: '18rem', margin: 'auto', marginBottom: '30px', marginTop: '30px' }}>
                    <ListGroup.Item>
                        <Card.Body>
                            <h6 className="tweets">{text}</h6>
                        </Card.Body>
                    </ListGroup.Item>
                    <ListGroup variant="flush">
                    <ListGroup.Item className="by"><h6>{author} on {date}</h6></ListGroup.Item>
                    <ListGroup.Item className="counter"><h2>counter: {counter}</h2></ListGroup.Item>
                    <ListGroup.Item className="feedback-btn">
                        <button onClick={increment}>+</button>
                        <button onClick={decrement}>-</button>
                    </ListGroup.Item>
                    </ListGroup>
                </Card> 
            </Card>
        </div>
    )
}