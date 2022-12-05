import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Register = () => {
	const [state, setState] = useState({
		user: {
			username: "",
			email: "",
			password: "",
		},
	});

	const updateInfo = (e) => {
		setState({
			...state,
			user: {
				...state.user,
				[e.target.name]: e.target.value,
			},
		});
	};

	const register = (e) => {
		e.preventDefault();
		console.log(state.user);
	};

	return (
		<>
			<Container className="mt-3">
				<Row>
					<Col xs={5} style={{ minWidth: "450px" }}>
						<Card className="shadow-lg">
							<Card.Header
								className="p-3"
								style={{ backgroundColor: "#0C6DFD", color: "white" }}
							>
								<h4>Register</h4>
							</Card.Header>
							<Card.Body>
								<Form>
									<Form.Group className="mb-3">
										<Form.Control
											name="username"
											onChange={updateInfo}
											type="text"
											placeholder="Username"
										/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control
											name="email"
											onChange={updateInfo}
											type="e-mail"
											placeholder="Email"
										/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Form.Control
											name="password"
											onChange={updateInfo}
											type="password"
											placeholder="Password"
										/>
									</Form.Group>
									<Form.Group className="mb-3">
										<Button onClick={register} variant="primary" type="submit">
											Register
										</Button>
									</Form.Group>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Register;
