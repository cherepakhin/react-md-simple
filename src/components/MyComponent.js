import PropTypes from 'prop-types';

/*
Пример с https://enzymejs.github.io/enzyme/docs/api/ShallowWrapper/props.html
 */
function MyComponent(props) {
    const { includedProp } = props;
    return (
        <div includedProp={includedProp}>Hello</div>
    );
}

MyComponent.propTypes = {
    includedProp: PropTypes.string.isRequired,
};

export { MyComponent };