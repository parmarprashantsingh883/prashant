import React from "react";

function StudentForm() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Add / Edit Student</h2>

      <form>
        <input placeholder="Name" /><br /><br />
        <input placeholder="Age" /><br /><br />
        <input placeholder="Course" /><br /><br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default StudentForm;
