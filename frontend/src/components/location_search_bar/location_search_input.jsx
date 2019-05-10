import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      address: "" 
    };
  }

  handleChange = address => {
    this.setState({ address });
  };


  handleSelect(address) {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.pinLocation(latLng))
      .then(() => this.setState({ address }))
      .catch(error => console.error("Error", error));
  };

  render() {
    return (
    <PlacesAutocomplete 
      value={this.state.address}
      onChange={this.handleChange}
      onSelect={this.handleSelect.bind(this)}
      googleCallbackName="myCallbackFunLocationSearchInputLocationSearchInputc">
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => <div className={this.props.class}>
              <input {...getInputProps({
                  placeholder: "Current location ...",
                  className: "location-search-input"
                })} />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active ? { backgroundColor: "#fafafa", cursor: "pointer" } : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return <div {...getSuggestionItemProps(suggestion, {
                        className,
                        style
                      })}>
                      <span>{suggestion.description}</span>
                    </div>;
                })}
              </div>
            </div>}
        </PlacesAutocomplete>
    );
  }
}

export default LocationSearchInput;