CREATE TABLE Course (
  CourseID     INT AUTO_INCREMENT PRIMARY KEY,
  CourseName   VARCHAR(150) NOT NULL,
  CourseLevel  VARCHAR(50) NOT NULL,
  DurationWeeks INT
);

CREATE TABLE Student (
  StudentID    INT AUTO_INCREMENT PRIMARY KEY,
  Name         VARCHAR(100) NOT NULL,
  CourseID     INT NOT NULL,
  ClassLevel   VARCHAR(50) NOT NULL,
  SchoolName   VARCHAR(150) NOT NULL,
  Email        VARCHAR(100) NOT NULL,
  PhoneNumber  VARCHAR(20),
  BirthDate    DATE,
  FOREIGN KEY (CourseID) REFERENCES Course(CourseID)
);

CREATE TABLE Enrollment (
  EnrollmentID  INT AUTO_INCREMENT PRIMARY KEY,
  StudentID     INT NOT NULL,
  CourseID      INT NOT NULL,
  EnrollmentDate DATE,
  Status        VARCHAR(50),
  FOREIGN KEY (StudentID) REFERENCES Student(StudentID),
  FOREIGN KEY (CourseID)  REFERENCES Course(CourseID),
  UNIQUE (StudentID, CourseID)
);
