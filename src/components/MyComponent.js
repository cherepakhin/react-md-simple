import PropTypes from 'prop-types';

/*
Пример с https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/props.html
 */
function MyComponent(props) {
    const { msg1, msg2 } = props;
    return (
        <div>
        <div >This is MyComponent with props.msg1=<b>{msg1}</b></div>
        <div >and props.msg2={msg2}</div>
        </div>
    );
}

MyComponent.propTypes = {
    msg1: PropTypes.string.isRequired,
    msg2: PropTypes.string.isRequired,
};

export { MyComponent };