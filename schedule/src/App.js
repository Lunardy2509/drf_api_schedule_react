import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import {Modal,Button} from 'react-bootstrap';
function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://kuliah.prasetiyamulya.ac.id/web-api/newkuliah/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  const [showModal, setShowModal] = useState(false);

  const handleReadMoreClick = (lecture) => {
    setShowModal(true);
    setSelectedLecture(lecture);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedLecture(null);
  };
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [courseQuery, setCourseQuery] = useState("");
  const [roomQuery, setRoomQuery] = useState("");
  const [programQuery, setProgramQuery] = useState("");
  const [facultyQuery, setFacultyQuery] = useState("");
  const filteredLectureData = data.filter((lecture) => {
    // Perform case-insensitive search based on the searchQuery
    return (
      lecture.program_name.toLowerCase().includes(programQuery.toLowerCase()) &&
      lecture.section_name.toLowerCase().includes(courseQuery.toLowerCase()) &&
      lecture.faculty_name.toLowerCase().includes(facultyQuery.toLowerCase()) &&
      lecture.room.toLowerCase().includes(roomQuery.toLowerCase())
    );
  });
  return (
    <>
      <div className="idance">
        <div className="schedule content-block">
          <div className="container">
            <div className="timetable">
              <div>
                <div className='d-flex justify-content-center bg-success p-2 text-white'>
                <div className="row mb-3">
                  <div className="text-center">
                    <h1>Database Jadwal STEM Prasmul</h1>
                    <p>© Ferdinand Lunardy, 2024, S1 Computer Systems Engineering, University of Prasetiya Mulya</p>
                  </div>
                <div className="col-lg-6 offset-lg-3">Search for any keywords
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for course name..."
                      value={courseQuery}
                      onChange={(e) => setCourseQuery(e.target.value)}
                    />
                  </form>
                </div>
                <div className="col-lg-6 offset-lg-3">Search for any keywords
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for room number..."
                      value={roomQuery}
                      onChange={(e) => setRoomQuery(e.target.value)}
                    />
                  </form>
                </div>
                <div className="col-lg-6 offset-lg-3">Search for any keywords
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for faculty name..."
                      value={facultyQuery}
                      onChange={(e) => setFacultyQuery(e.target.value)}
                    />
                  </form>
                </div>
                <div className="col-lg-6 offset-lg-3">Search for any keywords
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for program name..."
                      value={programQuery}
                      onChange={(e) => setProgramQuery(e.target.value)}
                    />
                  </form>
                </div>
                </div>
              </div>
              </div>
              <nav className="nav nav-tabs">
                <a className="nav-link active text-uppercase">Schedule</a>
              </nav>
              <div className="tab-content">
                <div className="tab-pane show active">
                  <div className="row">
                  {filteredLectureData.map((item)=>(
                    <div className="col-md-6" key={item.id}>
                      <div className="timetable-item">
                        <div className="timetable-item-img">
                          <img src="https://images.ctfassets.net/hrltx12pl8hq/1dVooi87HkWE0cg6Ctkojy/0b7d46c3f88c07fdcc15dd995b5e7d22/shutterstock_170839106.jpg?fit=fill&w=1200&h=630"
                            alt="Contemporary Dance" />
                        </div>
                        <div className="timetable-item-mainF p-2">
                          <div className="timetable-item-time">{item.day}</div>
                          <div className="timetable-item-time">{item.start_time}pm - {item.end_time}pm</div>
                          <div className="timetable-item-name">
                            <p style={{ margin: '0', padding: '0' }}>{item.section_name}</p>
                            <p style={{ margin: '0', padding: '0' }}>{item.program_name}</p>
                            <p style={{ margin: '0', padding: '0' }}>{item.faculty_name}</p>
                            <p style={{ margin: '0', padding: '0' }}>{item.room}</p>
                          </div>
                          <button className="btn btn-primary" onClick={() => handleReadMoreClick(item)}>
                            Course Info
                          </button>
                          <div className="timetable-item-like">
                            <div className="text-center text-white" style={{ backgroundColor: 'black', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              {item.capacity}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    ))}
                    {/* ... (similar blocks for other timetable items) ... */}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {selectedLecture && (
            <div>
              <p>Course Name: {selectedLecture.section_name}</p>
              <p>Program Name: {selectedLecture.program_name}</p>
              <p>Day: {selectedLecture.day}</p>
              <p>Date: {selectedLecture.date}</p>
              <p>Time: {selectedLecture.start_time} - {selectedLecture.end_time}</p>
              <p>Capacity: {selectedLecture.capacity}</p>
              <p>Location: {selectedLecture.location}</p>
              <p>Faculty Name: {selectedLecture.faculty_name}</p>
              <p>Room: {selectedLecture.room}</p>
            </div>
        )}
        {/* <p>id: 28859</p>
        <p>created_on: 2023-12-15T19:10:23.715504+07:00</p>
        <p>program_id: 50000631</p>
        <p>program_name: Product Design Engineering</p>
        <p>section_id: 50177187</p>
        <p>section_name: Introduction to Design_PDE2023</p>
        <p>day: Monday</p>
        <p>date: 2023-12-18T00:00:00+07:00</p>
        <p>subject_name: PDEA1165_C</p>
        <p>event_obj: 50185015</p>
        <p>event_name: Introduction to Design_PDE2023</p>
        <p>start_time: 14:00:00</p>
        <p>end_time: 16:30:00</p>
        <p>capacity: 17</p>
        <p>location: BSD</p>
        <p>nik: 806</p>
        <p>faculty_name: Ibu Aulia Ardista Wiradarmo</p>
        <p>room: BSD-005-3011</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
}

export default App;
