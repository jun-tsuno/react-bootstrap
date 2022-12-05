import React, { useState, useEffect } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import { UserService } from "../services/UserService";

const UserList = () => {
	const [state, setState] = useState({
		users: [],
	});

	useEffect(() => {
		UserService.getAllUsers()
			.then((response) => {
				setState({
					...state,
					users: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Container className="mt-3">
				<Row>
					<Col>
						<h3 className="text-primary">UserList</h3>
						<p className="fst-italic">
							Nostrud enim laboris officia consequat aliqua voluptate qui
							eiusmod sit aliquip magna nulla nisi.
						</p>
					</Col>
				</Row>
				<Row>
					<Col>
						<Table striped hover>
							<thead>
								<tr>
									<th>SNO</th>
									<th>Name</th>
									<th>Email</th>
									<th>Website</th>
									<th>Company</th>
									<th>Location</th>
								</tr>
							</thead>
							<tbody>
								{state.users.length > 0 &&
									state.users.map((user) => {
										return (
											<tr key={user.id}>
												<td>{user.id}</td>
												<td>{user.name}</td>
												<td>{user.email}</td>
												<td>{user.website}</td>
												<td>{user.company.name}</td>
												<td>{user.address.city}</td>
											</tr>
										);
									})}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default UserList;
