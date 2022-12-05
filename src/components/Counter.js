import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Counter = () => {
	const [count, setCount] = useState(0);

	const inc = () => {
		setCount((currentCount) => {
			return currentCount + 1;
		});
	};

	const dec = () => {
		setCount((currentCount) => {
			return currentCount - 1;
		});
	};

	return (
		<>
			<Container className="mt-3">
				<Row>
					<Col xs={4}>
						<Card className="shadow-lg">
							<Card.Body>
								<p className="display-2">{count}</p>
								<Button onClick={inc} variant="success" className="m-1">
									Increment
								</Button>
								<Button onClick={dec} variant="warning" className="m-1">
									Decrement
								</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Counter;
