import React, { useState } from "react";
import UserForm from "./UserForm";

export default function UserSignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    agreeTerms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log("Form submitted:", formData);
  };

  return (
    <div className="page-container">
      <UserForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      {submittedData && (
        <div className="output">
          <h3>Submitted Information</h3>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.fullName}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>Address 2:</strong> {submittedData.address2}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
          <p>
            <strong>Agreed Terms:</strong>{" "}
            {submittedData.agreeTerms ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  );
}
