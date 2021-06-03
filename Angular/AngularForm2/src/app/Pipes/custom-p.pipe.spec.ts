import { CustomPPipe } from './custom-p.pipe';

describe('CustomPPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomPPipe();
    expect(pipe).toBeTruthy();
  });
});
