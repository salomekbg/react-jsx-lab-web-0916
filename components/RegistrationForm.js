const React = require('react');

class RegistrationForm extends React.Component {
  render() {
    return (
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Password:</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

module.exports = RegistrationForm;
