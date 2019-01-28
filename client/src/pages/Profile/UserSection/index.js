import React from 'react';

const UserSection = ({ user: { username, fullName } }) => (
  <div className="profile-section">
    <h2>{fullName}, <span className="profile-section__username">@{username}</span></h2>
  </div>
);
export default UserSection;
