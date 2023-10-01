import PropTypes from 'prop-types';

/*
Пример с https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/props.html
 */
function MyComponent(props) {
    const { msgMyComp, msg2 } = props;
    return (
        <div>
        <div >This is MyComponent with props.msgMyComp to msg={msgMyComp}</div>
        <div >and props.msg2={msg2}</div>
        </div>
    );
}

MyComponent.propTypes = {
    msgMyComp: PropTypes.string.isRequired,
    msg2: PropTypes.string.isRequired,
};

export { MyComponent };