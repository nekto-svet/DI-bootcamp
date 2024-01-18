
// Part III : Garage
// Create another Functional Component inside your Components folder, called Garage.js.
// Use an attribute to pass a size to the Garage component, <Garage size="small" />.
// Use the Garage component inside the Car component and pass the size ‘small’. The Garage component should render Who lives in my <size> Garage?

const Garage = (props) => {
    const {size} = props;
    return (
        <h3>Who lives in my {size} Garage?</h3>
    )
}

export default Garage;