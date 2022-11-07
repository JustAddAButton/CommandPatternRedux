// import * as React from 'react';
// import renderer from 'react-test-renderer';
// import {LoginScreen} from '../login';
// import {ILoginScreenProps} from '../ILoginScreenProps';
// import {Text} from 'react-native';
// import {LoginCommand} from '../../commands/LoginCommand';
// import {useCommand} from '../../commands/Command';
// import {renderHook} from '@testing-library/react-hooks';

// describe('Login Screen Tests', () => {
//   let testRenderer: renderer.ReactTestRenderer;

//   jest.mock('../../commands/LoginCommand', function () {
//     const {default: mockLoginCommand} = jest.requireActual(
//       '../../commands/LoginCommand',
//     );
//     mockLoginCommand.prototype.pending = false;
//     mockLoginCommand.prototype.error = 'An error has occurred.';
//     mockLoginCommand.prototype.canExecute = function () {
//       return true;
//     };

//     return mockLoginCommand;
//   });

//   beforeEach(() => {
//     const props: ILoginScreenProps = {
//       title: 'Testing Title',
//     };
//     testRenderer = renderer.create(<LoginScreen {...props} />);
//   });

//   it('Should show title', async () => {
//     const title = testRenderer.root.findAllByType(Text)[0];
//     expect(title.props.children).toBe('Testing Title');
//   });

//   it('Should show login error', async () => {
//     const title = testRenderer.root.findByProps({
//       children: 'An error has occurred',
//     });
//     expect(title.props.children).toBe('An error has occurred');
//   });

//   it('renders correctly', () => {
//     const tree = testRenderer.toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   test('should increment counter', () => {
//     var loginCommand = new LoginCommand();
//     loginCommand.pending = true;
//     loginCommand.error = 'An error has occurred';
//     jest.spyOn(loginCommand, 'canExecute').mockImplementation(() => true);

//     const {result} = renderHook(() => useCommand(() => loginCommand));
//     expect(result.current.pending).toBe(true);

//     const props: ILoginScreenProps = {
//       title: 'Testing Title',
//     };
//     const test = renderer.create(<LoginScreen {...props} />);
//     const title = test.root.findByProps({
//       children: 'An error has occurred',
//     });
//     expect(title.props.children).toBe('An error has occurred');
//   });
// });
