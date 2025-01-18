import React from 'react';

const ApplicationForm = () => {
  return (
    <div>
      <h2>Onboard New Application</h2>
      <form>
        <label>
          Application Name:
          <input type="text" name="appName" />
        </label>
        <br />
        <label>
          Description:
          <textarea name="description"></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
