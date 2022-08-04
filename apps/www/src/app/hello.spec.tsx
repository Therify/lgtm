import { render, screen } from '@testing-library/react';
import { Button } from '@lgtm/button';

describe('Button in Hello', function () {
  it('renders Button', function () {
    render(<Button>LGTM</Button>);
    expect(screen.getByText('LGTM')).toBeDefined();
  });
});
