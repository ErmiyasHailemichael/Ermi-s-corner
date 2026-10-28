const bcrypt = require('bcryptjs');
const User = require('../models/User');

describe('User model', () => {
  test('comparePassword matches the correct password and rejects an incorrect one', async () => {
    const user = new User({ username: 'tester', email: 'tester@example.com', password: 'placeholder' });
    user.password = await bcrypt.hash('correct-password', 10);

    await expect(user.comparePassword('correct-password')).resolves.toBe(true);
    await expect(user.comparePassword('wrong-password')).resolves.toBe(false);
  });

  test('toJSON strips the password hash but keeps other fields', () => {
    const user = new User({ username: 'tester', email: 'tester@example.com', password: 'hashed-value' });

    const json = user.toJSON();

    expect(json).not.toHaveProperty('password');
    expect(json.username).toBe('tester');
    expect(json.email).toBe('tester@example.com');
  });
});
