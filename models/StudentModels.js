import pool from '../config/db.js';

export const getStudents = async () => {
    const[rows] = await pool.query("SELECT * FROM tblstudent");
    return rows;
}

export const insertStudent = async (name, srcode, course) => {
    const [result] = await pool.query(
    "INSERT INTO tblstudent (name, srcode, course) VALUES (?, ?, ?)",
    [name, srcode, course]
    );
    return result.insertId;
}

export const updateStudent = async (name, srcode, course, studentId) => {
    const [result] = await pool.query(
        "UPDATE tblstudent SET name = ?, srcode = ?, course = ? WHERE Id = ?",
        [name, srcode, course, studentId]
    );
    return result.affectedRows;
}

export const deleteStudent = async (studentId) => {
    const [result] = await pool.query(
        "DELETE FROM tblstudent WHERE Id = ?",
        [studentId]
    );
    return result.affectedRows;
}