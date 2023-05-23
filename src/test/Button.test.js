import { expect } from 'expect';
import { h } from 'preact';
import { render, fireEvent, screen, waitFor } from '@testing-library/preact';
import { Botton } from "../plugin/index.js"
import { test } from 'node:test';
describe('Button', () => {
    test('should render a button', () => {
        render(<Botton />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });
}
);