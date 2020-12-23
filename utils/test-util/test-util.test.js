import { speakFriend } from './test-util';

describe('speakFriend', () => {
  it('returns the string "Friend"', () => {
    expect(speakFriend()).toEqual('Friend');
  });
});
