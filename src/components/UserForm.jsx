import React from "react";

export default function UserForm({ formData, onChange, onSubmit }) {
  return (
    <div className="form-wrapper">
      <h2>Data Entry Form</h2>
      <form onSubmit={onSubmit}>
        <div className="row">
          <div className="column">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={onChange}
              required
            />
          </div>
          <div className="column">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="1234 Main St"
          value={formData.address}
          onChange={onChange}
          required
        />

        <label>Address 2</label>
        <input
          type="text"
          name="address2"
          placeholder="Apartment, studio, or floor"
          value={formData.address2}
          onChange={onChange}
        />

        <div className="row">
          <div className="column">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={onChange}
              required
            />
          </div>
          <div className="column">
            <label>Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={onChange}
              required
            >
              <option value="">Choose...</option>
              <option value="Ontario">Ontario</option>
              <option value="Quebec">Quebec</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Nova Scotia">Nova Scotia</option>
            </select>
          </div>
          <div className="column">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={onChange}
          />
          <label> Agree Terms & Condition?</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
