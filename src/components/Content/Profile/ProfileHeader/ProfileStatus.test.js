import renderer, {act} from 'react-test-renderer';
import ProfileStatus from './PorfileStatus'


describe('profile status testing testing', () => {
    test('status from props must be in state', () => {
        let component = renderer.create(<ProfileStatus status='Testing status karaba'/>);
        expect(component.root.props.status).toBe('Testing status karaba');
    })

    test('div status is exist', () => {
        let component = renderer.create(<ProfileStatus status='Testing status karaba'/>);
        let sub = component.root.findByType('div')
        expect(sub.children[0].children[0]).toBe('Testing status karaba');
    })

    test('input should not be exist', () => {
        let component = renderer.create(<ProfileStatus status='Testing status karaba'/>);
        expect(() => {
           let input = component.root.findByType('input')
        }).toThrow();
    })

    test('input should be pop on dobule click', () => {
        let component = renderer.create(<ProfileStatus status='Testing status karaba'/>);
        let div = component.root.findByType('div')
        act(() => {
             div.props.children.props.onDoubleClick();
        })
        let input = component.root.findByType('input')
        expect(input.props.value).toBe('Testing status karaba');
    })

});

