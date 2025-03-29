import React, { useState, useEffect } from "react";
import { Card, Dropdown, Spinner, Container, Row, Col } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "bootstrap/dist/css/bootstrap.min.css";
import EditUserModal from "./editUser";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  
  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`https://reqres.in/api/users?page=${page}`);
      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleSaveChanges = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center text-primary">User List</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <Row>
          {users.map((user) => (
            <Col key={user.id} xs={12} sm={6} md={4} lg={3} className="mb-3">
              <Card className="shadow-sm" style={{ borderRadius: "10px" }}>
                <Card.Body className="text-center">
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="rounded-circle mb-2"
                    width="80"
                  />
                  <h6 className="mb-0">{user.first_name} {user.last_name}</h6>
                  <p className="text-muted" style={{ fontSize: "0.9rem" }}>{user.email}</p>

                  {/* Three-dot dropdown */}
                  <Dropdown className="position-absolute bottom-0 end-0 mb-2 me-2">
                    <Dropdown.Toggle
                      variant="light"
                      className="border-0 p-1"
                      id="dropdown-basic"
                      style={{ cursor: "pointer", background: "none" }}
                    >
                      &#x22EE;
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ zIndex: 99 }}>
                      <Dropdown.Item onClick={() => handleEdit(user)}>Edit</Dropdown.Item>
                      <Dropdown.Item href="#" className="text-danger">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      
      <ReactPaginate
        previousLabel={"← Prev"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center mt-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />

     
      <EditUserModal 
        show={showModal} 
        handleClose={() => setShowModal(false)} 
        user={selectedUser} 
        handleSave={handleSaveChanges} 
      />
    </Container>
  );
};

export default Dashboard;
